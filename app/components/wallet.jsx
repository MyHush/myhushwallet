import { Alert, Form, FormText, ButtonGroup, UncontrolledAlert, Tooltip, CardBlock, CardFooter, Modal, ModalHeader, ModalBody, ModalFooter, ListGroup, ListGroupItem, Badge, Progress, FormGroup, Label, Container, Jumbotron, TabContent, InputGroup, Input, InputGroupAddon, InputGroupButton, Table, TabPane, Nav, NavItem, NavLink, Card, CardSubtitle, Button, CardTitle, CardText, Row, Col } from 'reactstrap';

import axios from 'axios'
import React from 'react'
import QRCode from 'qrcode.react';
import classnames from 'classnames'
import CopyToClipboard from 'react-copy-to-clipboard'
import ReactTable from 'react-table'
import hushjs from 'hushjs'
import hushwalletutils from '../lib/utils'
import hdwallet from '../lib/hdwallet'
import FileSaver from 'file-saver'

import MDRefresh from 'react-icons/lib/md/refresh'
import MDCopy from 'react-icons/lib/md/content-copy'
import MDSettings from 'react-icons/lib/md/settings'
import FARepeat from 'react-icons/lib/fa/repeat'
import FAUnlock from 'react-icons/lib/fa/unlock-alt'
import FAEyeSlash from 'react-icons/lib/fa/eye-slash'
import FAEye from 'react-icons/lib/fa/eye'

import pjson from '../../package.json'

// Throttled GET request to prevent unusable lag
const throttledAxiosGet = hushwalletutils.promiseDebounce(axios.get, 1000, 5)

// Unlock wallet enum
var UNLOCK_WALLET_TYPE = {
  IMPORT_WALLET: 0,
  HD_WALLET: 1,
  PASTE_PRIV_KEY: 2
}

// Components
class ToolTipButton extends React.Component {
  constructor(props){
    super(props);

    this.toggle = this.toggle.bind(this)
    this.state = {
      tooltipOpen: false
    }
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    })
  }

  render() {
    return (
      <span>
        <Button disabled={this.props.disabled} onClick={this.props.onClick} className="mr-1" color="secondary" id={'Tooltip-' + this.props.id}>
          {this.props.buttonText}
        </Button>
        <Tooltip placement="top" isOpen={this.state.tooltipOpen} target={'Tooltip-' + this.props.id} toggle={this.toggle}>
          {this.props.tooltipText}
        </Tooltip>
      </span>
    )
  }
}

class ZWalletGenerator extends React.Component {
  constructor(props) {
    super(props)    
    
    this.handlePasswordPhrase = this.handlePasswordPhrase.bind(this);
    this.state = {
      passwordPhrase: '',
      privateKey: ''
    }
  }

  handlePasswordPhrase(e){
    // What wif format do we use?
    var wifHash = this.props.settings.useTestNet ? hushjs.config.testnet.wif : hushjs.config.mainnet.wif

    var pk = hushjs.address.mkPrivKey(e.target.value)
    var pkwif = hushjs.address.privKeyToWIF(pk, true, wifHash)

    if (e.target.value === ''){
      pkwif = ''
    }

    this.setState({
      privateKey: pkwif
    })
  }
  
  render () {
    return (
      <div>                  
        <h3 className='display-6'>Generate New Address</h3>
        <br/>
        <InputGroup>          
          <Input onChange={this.handlePasswordPhrase} placeholder="Password phrase. Do NOT forget to save this! Use >15 words to be safe." />            
        </InputGroup>
        <br/>
        <InputGroup>                      
          <Input value={this.state.privateKey} placeholder="Private key generated from password phrase" />              
          <InputGroupButton>
            <CopyToClipboard text={this.state.privateKey}>
              <Button><MDCopy/></Button>
            </CopyToClipboard>
          </InputGroupButton>
        </InputGroup>        
      </div>
    )
  }
}


class ZWalletUnlockKey extends React.Component {
  constructor(props){
    super(props)

    this.unlockHDWallet = this.unlockHDWallet.bind(this)
    this.loadWalletDat = this.loadWalletDat.bind(this)
    this.toggleShowPassword = this.toggleShowPassword.bind(this)
    this.unlockPrivateKeys = this.unlockPrivateKeys.bind(this)
    this.toggleUseLimChars = this.toggleUseLimChars.bind(this)   

    this.state = {
      showPassword: false,
      secretPhrase: '',
      invalidPrivateKey: false,
      secretPhraseTooShort: false,
      useLimChars: false,   
      // Style for input button
      inputFileStyle: {
          WebkitAppearance: 'button',
          cursor: 'pointer'
      }   
    }
  }  

  toggleUseLimChars(){
this.setState({
useLimChars: !this.state.useLimChars,
})   
  }

  toggleShowPassword(){
    this.setState({
      showPassword: !this.state.showPassword,
    })
  }

  unlockPrivateKeys(){
    // Success = return 0
    const success = this.props.handleUnlockPrivateKeys() === 0        

    if (!success){
      this.setState({
        invalidPrivateKey: true, 
      })
    }
  }

  unlockHDWallet(){
    try{
      // Generate private keys from secret phrase
      const pk = hdwallet.phraseToHDWallet(this.state.secretPhrase)

      this.setState({
        secretPhraseTooShort: false
      })

      // Set private key and unlock them (we know it'll work so no need to validate)
      this.props.setPrivateKeys(pk, true)
    } catch (err){
      this.setState({
        secretPhraseTooShort: true
      })
    }
  }

  loadWalletDat(e){    
    var reader = new FileReader()
    var file = e.target.files[0]

    // Read file callback function
    reader.onloadend = () => {
      // Get reader results in bytes
      var dataHexStr = reader.result

      // Retrieve private keys from wallet.dat
      // Source: https://gist.github.com/moocowmoo/a715c80399bb202a65955771c465530c
      var re = /\x30\x81\xD3\x02\x01\x01\x04\x20(.{32})/gm
      var privateKeys = dataHexStr.match(re)
      privateKeys = privateKeys.map(function(x) {
        x = x.replace('\x30\x81\xD3\x02\x01\x01\x04\x20', '')
        x = Buffer.from(x, 'latin1').toString('hex')
        return x
      })      

      // Set private key
      this.props.setPrivateKeys(privateKeys)

      // Unlock private key
      const success = this.props.handleUnlockPrivateKeys() === 0
      
      if (!success){
        this.setState({
          invalidPrivateKey: true, 
        })
      }
    }

    // Read file
    reader.readAsBinaryString(file)
  }

  render () {
    if (this.props.unlockType == UNLOCK_WALLET_TYPE.IMPORT_WALLET){
      return (
        <Form>
          <FormGroup row>            
            <Col>
              {this.state.invalidPrivateKey ? <Alert color="danger"><strong><span className="import1">Error.</span></strong>&nbsp;<span className="import2">Keys in files are corrupted</span></Alert> : ''}
               <Label for="walletDatFile" className="btn btn-block btn-secondary" style={this.state.inputFileStyle}><span className="import3">Select wallet.dat file</span>
                <Input
                  style={{display: 'none'}}
                  type="file"                 
                  name="file"
                  id="walletDatFile"                
                  onChange={this.loadWalletDat}
                />
              </Label>
              <FormText color="muted">
                <span className="import4">For Windows, it should be in</span> %APPDATA%/Hush<br/>
                <span className="import5">For Mac/Linux, it should be in</span> ~/.Hush
              </FormText>
            </Col>
          </FormGroup>
        </Form>
      )
    }

    else if (this.props.unlockType == UNLOCK_WALLET_TYPE.PASTE_PRIV_KEY){
      return (
        <div>
          {this.state.invalidPrivateKey ? <Alert color="danger"><strong><span className="import1">Error.</span></strong>&nbsp;<span className="import6">Invalid private key</span></Alert> : ''}
          <InputGroup>                                       
            <InputGroupButton>
              <Button id={4}
                onClick={this.toggleShowPassword}             
              >{this.state.showPassword? <FAEye/> : <FAEyeSlash/>}</Button>
            </InputGroupButton>
            <Input
              type={this.state.showPassword ? "text" : "password"}
              onChange={(e) => this.props.setPrivateKeys([e.target.value])} // Set it in a list so we can map over it later
              placeholder="Private key"
            />
          </InputGroup>
          <div style={{paddingTop: '8px'}}>
            <Button color="secondary" className="btn-block" onClick={this.unlockPrivateKeys}><span className="import7">Unlock Private Key</span></Button>
          </div>
        </div>
      )
    }
 
    else if (this.props.unlockType == UNLOCK_WALLET_TYPE.HD_WALLET){
      return (
        <div>
          <Alert color="warning"><strong><span className="wallet1">Warning.</span></strong>&nbsp;<span className="wallet2">Make sure you have saved your secret phrase somewhere. The 256/64 button to the right switches between maximum allowed input length.</span></Alert>
          {this.state.secretPhraseTooShort ? <Alert color="danger"><strong><span className="import1">Error.</span></strong>&nbsp;<span className="wallet3">Secret phrase too short</span></Alert> : '' }
          <InputGroup>                                       
            <InputGroupButton>
              <Button id={7}
                onClick={this.toggleShowPassword}                
              >{this.state.showPassword? <FAEye/> : <FAEyeSlash/>}</Button>
            </InputGroupButton>
            <Input
              type={this.state.showPassword ? "text" : "password"}
              maxLength={this.state.useLimChars ? "64" : "256"} //"256" ZWallet
              onChange={(e) => this.setState({secretPhrase: e.target.value})}
              placeholder="Secret phrase. e.g. cash cow money heros cardboard money bag late green"
            />
            <InputGroupButton>
              <Button id={423}
                onClick={this.toggleUseLimChars}                
              >{this.state.useLimChars? "64" : "256"}</Button>
            </InputGroupButton>                     
          </InputGroup>
          <div style={{paddingTop: '8px'}}>
            <Button color="secondary" className="btn-block" onClick={this.unlockHDWallet}><span className="wallet4">Generate/Unlock Wallet</span></Button>
          </div>
        </div>
      )
    }
  }
}

class ZWalletSettings extends React.Component {
  render () {
    return (
      <Modal isOpen={this.props.settings.showSettings} toggle={this.props.toggleModalSettings}>
        <ModalHeader toggle={this.props.toggleShowSettings}><span className="settings1">Hush Wallet Settings</span></ModalHeader>                  
        <ModalBody>
          <ZWalletSelectUnlockType
              setUnlockType={this.props.setUnlockType}
              unlockType={this.props.settings.unlockType}
            />  
        </ModalBody>
        <ModalBody>                              
          <InputGroup>
            <InputGroupAddon><span className="settings2">Insight API</span></InputGroupAddon>
            <Input 
              value={this.props.settings.insightAPI}
              onChange={(e) => this.props.setInsightAPI(e.target.value)}
            />
          </InputGroup><br/>
          <Row>
            <Col sm="6">
              <Label check>
                <Input
                  disabled={!(this.props.publicAddresses === null)}
                  defaultChecked={this.props.settings.compressPubKey} type="checkbox" 
                  onChange={this.props.toggleCompressPubKey}
                />{' '}
                <span className="settings3">Compress Public Key</span>
              </Label>
            </Col>
            <Col sm="6">
              <Label check>
                <Input                                    
                  defaultChecked={this.props.settings.showWalletGen} type="checkbox" 
                  onChange={this.props.toggleShowWalletGen}
                />{' '}
                <span className="settings4">Show Address Generator</span>
              </Label>
            </Col>
          </Row>
        </ModalBody>        
        <ModalFooter>
          <Label check>
            <Input
              disabled={!(this.props.publicAddresses === null)}
              defaultChecked={this.props.settings.useTestNet} type="checkbox" 
              onChange={this.props.toggleUseTestNet}
            />{' '}
            <span className="settings5">testnet</span>
          </Label>
        </ModalFooter>
      </Modal>
    )
  }
}

class ZAddressInfo extends React.Component {
  constructor(props) {
    super(props)

    this.updateAddressInfo = this.updateAddressInfo.bind(this)
    this.updateAddressesInfo = this.updateAddressesInfo.bind(this)
    this.getAddressBlockExplorerURL = this.getAddressBlockExplorerURL.bind(this)    

    this.state = {            
      retrieveAddressError: false      
    }
  }

  // Updates all address info
  updateAddressesInfo() {    
    // The key is the address
    // Value is the private key
    Object.keys(this.props.publicAddresses).forEach(function(key) {
      if (key !== undefined){
        this.updateAddressInfo(key)
      }
    }.bind(this))    
  }

  // Gets the blockchain explorer URL for an address
  getAddressBlockExplorerURL(address) {
    return hushwalletutils.urlAppend(this.props.settings.explorerURL, 'address/') + address
  }

  // Updates a address info
  updateAddressInfo(address) {
    // GET request to URL
    var info_url = hushwalletutils.urlAppend(this.props.settings.insightAPI, 'addr/')
    info_url = hushwalletutils.urlAppend(info_url, address + '?noTxList=1')    
        
    throttledAxiosGet(info_url)
    .then(function (response){
      var data = response.data;

      this.props.setPublicAddressesKeyValue(address, 'confirmedBalance', data.balance)
      this.props.setPublicAddressesKeyValue(address, 'unconfirmedBalance', data.unconfirmedBalance)
      this.setState({
        retrieveAddressError: false
      })

    }.bind(this))
    .catch(function (error){
      this.setState({
        retrieveAddressError: true
      })
    }.bind(this))
  }

  componentDidMount() {
    // Run immediately
    this.updateAddressesInfo()

    // Update every 30 seconds    
    this.interval = setInterval(this.updateAddressesInfo, 300000)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {   
    // Key is the address
    var addresses = [];
    var totalConfirmed = 0.0;
    var totalUnconfirmed = 0.0;
    Object.keys(this.props.publicAddresses).forEach(function(key) {
      if (key !== undefined){
        // Add to address    
        addresses.push(
          {
            address: key,
            privateKeyWIF: this.props.publicAddresses[key].privateKeyWIF,
            confirmedBalance: this.props.publicAddresses[key].confirmedBalance,
            unconfirmedBalance: this.props.publicAddresses[key].unconfirmedBalance
          }
        )

        const c_confirmed = Number(this.props.publicAddresses[key].confirmedBalance)
        const c_unconfirmed = Number(this.props.publicAddresses[key].unconfirmedBalance)
        if (!isNaN(c_confirmed)){
          totalConfirmed += c_confirmed
        }

        if (!isNaN(c_unconfirmed)){
          totalUnconfirmed += c_unconfirmed
        }
      }
    }.bind(this))

    const addressColumns = [{
      Header: 'Address',
      accessor: 'address',      
      resizable: true,
      Cell: props => <a href={this.getAddressBlockExplorerURL(props.value)}>{props.value}</a>
    }, {
      Header: 'Confirmed',
      accessor: 'confirmedBalance',
      Cell: props => <span className='number'>{props.value}</span>
    }, {
      Header: 'Unconfirmed',
      accessor: 'unconfirmedBalance',
      Cell: props => <span className='number'>{props.value}</span>
    }]

    return (
      <Row>
        <Col>     
          <Card>
            <CardBlock>                                                          
              {this.state.retrieveAddressError ?
              <Alert color="danger"><span className="retrieve1">Error connecting to the Insight API. Double check the Insight API supplied in settings.</span></Alert>
              :
              <Alert color="warning"><span className="retrieve2">The balance displayed here is dependent on the insight node.</span><br/><span className="retrieve3">Automatically updates every 5 minutes. Alternatively, you can</span> <a href="#" onClick={() => this.updateAddressesInfo()}><span className="retrieve4">forcefully refresh</span></a> <span className="retrieve5">them.</span></Alert>
              }                                          
            </CardBlock>
          </Card>  
          <Card>
            <CardBlock>
              <ReactTable
                columns={[{
                  Header: 'Total Confirmed',
                  accessor: 'totalConfirmed',
                  Cell: props => <span className='number'>{props.value}</span>
                }, {
                  Header: 'Total Unconfirmed',
                  accessor: 'totalUnconfirmed',
                  Cell: props => <span className='number'>{props.value}</span>
                }]}

                data={[
                  {
                    totalConfirmed: totalConfirmed,
                    totalUnconfirmed: totalUnconfirmed
                  }
                ]}

                showPagination={false}

                minRows={1}
              />
            </CardBlock>
          </Card>          
          <Card>
            <CardBlock>                                            
              <ReactTable
                data={addresses} columns={addressColumns}
                minRows={addresses.length > 20 ? 20 : addresses.length}
                showPagination={addresses.length > 20}
              />
            </CardBlock>
          </Card>
        </Col>
      </Row>
    )
  }
}

class ZSendHUSH extends React.Component {
  constructor(props) {
    super(props)    
    
    this.setProgressValue = this.setProgressValue.bind(this);
    this.setSendErrorMessage = this.setSendErrorMessage.bind(this);    
    this.handleUpdateSelectedAddress = this.handleUpdateSelectedAddress.bind(this);
    this.handleUpdateRecipientAddress = this.handleUpdateRecipientAddress.bind(this);
    this.handleUpdateAmount = this.handleUpdateAmount.bind(this);
    this.handleCheckChanged = this.handleCheckChanged.bind(this);
    this.handleUpdateFee = this.handleUpdateFee.bind(this);
    this.handleSendHUSH = this.handleSendHUSH.bind(this);    

    this.state = {
      selectedAddress: '', // which address did we select
      recipientAddress: '',
      fee: '',
      amount: '',                        
      sentTxid: '', // Whats the send txid
      sendProgress: 0, // Progress bar, 100 to indicate complete
      sendErrorMessage: '',
      confirmSend: false,
    }
  }
  
  handleUpdateSelectedAddress(e) {    
    this.setState({
      selectedAddress: e.target.value
    })
  }

  handleUpdateRecipientAddress(e) {
    this.setState({
      recipientAddress: e.target.value
    })
  }

  handleUpdateFee(e) {
    this.setState({
      fee: e.target.value
    })
  }

  handleUpdateAmount(e) {    
    this.setState({
      amount: e.target.value
    })
  }

  handleCheckChanged(e){    
    this.setState({
      confirmSend: e.target.checked
    })
  }

  setProgressValue(v){
    this.setState({
      sendProgress: v
    })
  }

  setSendErrorMessage(msg){
    this.setState({
      sendErrorMessage: msg
    })
  }

  handleSendHUSH(){      
    const value = this.state.amount;
    const fee = this.state.fee;
    const recipientAddress = this.state.recipientAddress;
    const senderAddress = this.state.selectedAddress;

    // Convert how much we wanna send
    // to satoshis
    const satoshisToSend = Math.round(value * 100000000)
    const satoshisfeesToSend = Math.round(fee * 100000000)        
    
    // Reset hush send progress and error message
    this.setProgressValue(1)
    this.setSendErrorMessage('')

    // Error strings
    var errString = ''

    // Validation    
    if (senderAddress === ''){
      errString += '`From Address` field can\'t be empty.;'
    }

    if (recipientAddress.length !== 35) {
      errString += 'Invalid address. Only transparent addresses are supported at this point in time.;'
    }

    if (typeof parseInt(value) !== 'number' || value === ''){
      errString += 'Invalid amount.;'
    }

    // Can't send 0 satoshis
    if (satoshisToSend <= 0){
      errString += 'Amount must be greater than 0.;'      
    }

    if (typeof parseInt(fee) !== 'number' || fee === ''){
      errString += 'Invalid fee.;'
    }

    if (errString !== ''){
      this.setSendErrorMessage(errString)
      this.setProgressValue(0)
      return
    }

    // Private key
    const senderPrivateKey = this.props.publicAddresses[senderAddress].privateKey;

    // Get previous transactions
    const prevTxURL = hushwalletutils.urlAppend(this.props.settings.insightAPI, 'addr/') + senderAddress + '/utxo'
    const infoURL = hushwalletutils.urlAppend(this.props.settings.insightAPI, 'status?q=getInfo')
    const sendRawTxURL = hushwalletutils.urlAppend(this.props.settings.insightAPI, 'tx/send')

    // Building our transaction TXOBJ
    // How many satoshis do we have so far
    var satoshisSoFar = 0
    var history = []
    var recipients = [{address: recipientAddress, satoshis: satoshisToSend}]

    // Get transactions and info
    axios.get(prevTxURL)
    .then(function (tx_resp){
      this.setProgressValue(25)
      
      const tx_data = tx_resp.data      

      axios.get(infoURL)
      .then(function (info_resp){
        this.setProgressValue(50)
        const info_data = info_resp.data


          // Iterate through each utxo
          // append it to history
          for (var i = 0; i < tx_data.length; i ++){
            if (tx_data[i].confirmations == 0){
              continue;
            }

            history = history.concat({
              txid: tx_data[i].txid,
              vout: tx_data[i].vout,
              scriptPubKey: tx_data[i].scriptPubKey,            
            });
            
            // How many satoshis do we have so far
            satoshisSoFar = satoshisSoFar + tx_data[i].satoshis;
            if (satoshisSoFar >= satoshisToSend + satoshisfeesToSend){
              break;
            }
          }

          // If we don't have enough address
          // fail and tell user
          if (satoshisSoFar < satoshisToSend + satoshisfeesToSend){            
            this.setSendErrorMessage('Not enough confirmed HUSH in account to perform transaction')
            this.setProgressValue(0)          
          }

          // If we don't have exact amount
          // Refund remaining to current address
          if (satoshisSoFar !== satoshisToSend + satoshisfeesToSend){
            var refundSatoshis = satoshisSoFar - satoshisToSend - satoshisfeesToSend
            recipients = recipients.concat({address: senderAddress, satoshis: refundSatoshis})
          }

          // Create transaction
          var txObj = hushjs.transaction.createRawTx(history, recipients)

          // Sign each history transcation          
          for (var i = 0; i < history.length; i ++){
            txObj = hushjs.transaction.signTx(txObj, i, senderPrivateKey, this.props.settings.compressPubKey)
          }

          // Convert it to hex string
          const txHexString = hushjs.transaction.serializeTx(txObj)

          axios.post(sendRawTxURL, {rawtx: txHexString})
          .then(function(sendtx_resp){         
            this.setState({
              sendProgress: 100,
              sentTxid: sendtx_resp.data.txid
            })
          }.bind(this))
          .catch(function(error) {            
            this.setSendErrorMessage(error + '')
            this.setProgressValue(0)
            return
          }.bind(this))
        }.bind(this))
      }.bind(this))
    .catch(function(error){      
      this.setSendErrorMessage(error)
      this.setProgressValue(0)
      return
    }.bind(this));
  } 

  render() {
    // If send was successful
    var hushTxLink
    if (this.state.sendProgress === 100){
      var hushtx = hushwalletutils.urlAppend(this.props.settings.explorerURL, 'tx/') + this.state.sentTxid
      hushTxLink = (
        <Alert color="success">
        <strong><span className="send1">HUSH successfully sent!</span></strong> <a href={hushtx}><span className="send2">Click here to view your transaction</span></a>
        </Alert>
      )      
    }

    // Else show error why
    else if (this.state.sendErrorMessage !== ''){
      hushTxLink = (
        this.state.sendErrorMessage.split(';').map(function (s) {
          if (s !== ''){
            return (
              <Alert color="danger">
              <strong><span className="import1">Error.</span></strong> {s}
              </Alert>
            )
          }
        })
      )      
    }

    // Send addresses
    // Key is the address btw
    var sendAddresses = [];
    Object.keys(this.props.publicAddresses).forEach(function(key) {
      if (key !== undefined){        
        sendAddresses.push(
          <option value={key}>[{this.props.publicAddresses[key].confirmedBalance}] - {key}</option>                                       
        )
      }
    }.bind(this))

    return (
      <Row>
        <Col>
          <Card>
            <CardBlock>       
              <Alert color="danger"><span className="send3">ALWAYS VALIDATE YOUR DESINATION ADDRESS BY SENDING SMALL AMOUNTS OF HUSH FIRST</span></Alert>              
              <InputGroup>
                <InputGroupAddon><span className="send4">From Address</span></InputGroupAddon>
                <Input type="select" onChange={this.handleUpdateSelectedAddress}>
                  <option value=''></option>
                  {sendAddresses}
                </Input>
              </InputGroup>
              <InputGroup>
                <InputGroupAddon><span className="send5">To Address</span></InputGroupAddon>
                <Input onChange={this.handleUpdateRecipientAddress} placeholder="e.g t1h6kmaQwcuyejDLazT3TNZfV8EEtCzHRhc" />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon><span className="send6">Amount</span></InputGroupAddon>
                <Input onChange={this.handleUpdateAmount} placeholder="e.g 42" />
              </InputGroup>
              <InputGroup>
                <InputGroupAddon><span className="send7">Fee</span></InputGroupAddon>
                <Input onChange={this.handleUpdateFee} placeholder="e.g 0.0001" />
              </InputGroup>
              <br/>
              <FormGroup check>
                <Label check>
                  <Input onChange={this.handleCheckChanged} type="checkbox" />{' '}
                  <span className="send8">Yes, I would like to send these HUSH</span>
                </Label>
              </FormGroup> 
              <br/>                           
              <Button 
                color="warning" className="btn-block"
                disabled={!this.state.confirmSend || (this.state.sendProgress > 0 && this.state.sendProgress < 100)}
                onClick={this.handleSendHUSH}
              ><span className="send9">Send</span></Button>
            </CardBlock>
            <CardFooter> 
              {hushTxLink}
              <Progress value={this.state.sendProgress} />                                  
            </CardFooter>       
          </Card>
        </Col>
      </Row>
    )
  }
}

class ZWalletSelectUnlockType extends React.Component {
  constructor(props) {
    super(props);

    this.state = { cSelected: this.props.unlockType }
  }

  onRadioBtnClick(s){
    this.setState({
      cSelected: s
    })

    this.props.setUnlockType(s)
  }

  render() {
    return ( 
      <div style={{textAlign: 'center'}}>  
        <ButtonGroup vertical>                 
          <Button color="secondary" onClick={() => this.onRadioBtnClick(UNLOCK_WALLET_TYPE.HD_WALLET)} active={this.state.cSelected === UNLOCK_WALLET_TYPE.HD_WALLET}><span className="settings6">Enter secret phrase</span></Button>
          <Button color="secondary" onClick={() => this.onRadioBtnClick(UNLOCK_WALLET_TYPE.IMPORT_WALLET)} active={this.state.cSelected === UNLOCK_WALLET_TYPE.IMPORT_WALLET}><span className="settings7">Load wallet.dat</span></Button>        
          <Button color="secondary" onClick={() => this.onRadioBtnClick(UNLOCK_WALLET_TYPE.PASTE_PRIV_KEY)} active={this.state.cSelected === UNLOCK_WALLET_TYPE.PASTE_PRIV_KEY}><span className="settings8">Paste private key</span></Button>      
        </ButtonGroup>
      </div>
    )
  }
}

class ZPrintableKeys extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      selectedPublicAddress: '',
      selectedPrivateKey: '',  
    }

    this.handleUpdateSelectedAddress = this.handleUpdateSelectedAddress.bind(this)
  }

  handleUpdateSelectedAddress(e){
    const selectedPublicAddress = e.target.value;
    const selectedPrivateKey = selectedPublicAddress === '' ? '' : this.props.publicAddresses[selectedPublicAddress].privateKeyWIF;

    this.setState({
      selectedPublicAddress: selectedPublicAddress,
      selectedPrivateKey: selectedPrivateKey
    })

    console.log(selectedPrivateKey)
  }

  render() {
    var sendAddresses = [];
    Object.keys(this.props.publicAddresses).forEach(function(key) {
      if (key !== undefined){        
        sendAddresses.push(
          <option value={key}>[{this.props.publicAddresses[key].confirmedBalance}] - {key}</option>                                       
        )
      }
    }.bind(this))

    return (
      <div>
        <h3><span className="print1">Printable Wallet</span></h3>
          <Input type="select" onChange={this.handleUpdateSelectedAddress}>
            <option value=''></option>
            {sendAddresses}
          </Input>
          <div>
            {
              this.state.selectedPublicAddress === '' ?
              null :
              (          
                <Row style={{textAlign: 'center', paddingTop: '75px', paddingBottom: '25px'}}>              
                  <Col>
                    <QRCode value={this.state.selectedPublicAddress} /><br/>
                    { this.state.selectedPublicAddress }
                  </Col>

                  <Col>
                    <QRCode value={this.state.selectedPrivateKey} /><br/>
                    { this.state.selectedPrivateKey }
                  </Col>
                </Row> 
              )           
            }
          </div>
      </div>
    )
  }
}

class ZWalletTabs extends React.Component {
  constructor(props){
    super(props)

    this.toggleTabs = this.toggleTabs.bind(this);
    this.savePrivateKeys = this.savePrivateKeys.bind(this);
    this.state = {
      activeTab: '1'
    }
  }

  toggleTabs(tab) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab
      });
    }
  }

  savePrivateKeys(){
    // ISO 8601
    var now = new Date();
    now = now.toISOString().split('.')[0]+'Z';

    var fileStr = '# Wallet dump created by myhushwallet ' + pjson.version + '\n'
    fileStr += '# Created on ' + now + '\n\n\n'

    Object.keys(this.props.publicAddresses).forEach(function(key) {
      fileStr += this.props.publicAddresses[key].privateKeyWIF
      fileStr += ' ' + now + ' ' + 'label=' + ' ' + '# addr=' + key
      fileStr += '\n'
    }.bind(this))
    
    const pkBlob = new Blob([fileStr], {type: 'text/plain;charset=utf-8'})
    FileSaver.saveAs(pkBlob, now + '_myhushwallet_private_keys.txt')
  }

  render () {
    return (      
      <div>
        <Nav tabs>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '1' })}
              onClick={() => { this.toggleTabs('1'); }}
            >
              <span className="menu1">Info</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '2' })}
              onClick={() => { this.toggleTabs('2'); }}
            >
              <span className="menu2">Send HUSH</span>
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink
              className={classnames({ active: this.state.activeTab === '3' })}
              onClick={() => { this.toggleTabs('3'); }}
            >
              <span className="menu3">Export</span>
            </NavLink>
          </NavItem>       
        </Nav>
        <TabContent activeTab={this.state.activeTab}>
          <TabPane tabId="1">
            <ZAddressInfo
              publicAddresses={this.props.publicAddresses}
              settings={this.props.settings}
              setPublicAddressesKeyValue={this.props.setPublicAddressesKeyValue}
            />
          </TabPane>
          <TabPane tabId="2">
            <ZSendHUSH 
              settings={this.props.settings}
              publicAddresses={this.props.publicAddresses}            
            />
          </TabPane>
          <TabPane tabId="3">
            <Row>
              <Col>
                <Card>                  
                  <CardBlock>
                    <ZPrintableKeys publicAddresses={this.props.publicAddresses}/>                  
                  </CardBlock>                  
                  <CardBlock>
                    <h3><span className="export1">Private Key Dump</span></h3>
                    <Button 
                      color="secondary" className="btn-block"
                      onClick={this.savePrivateKeys}                  
                    ><span className="export2">Download Private Keys</span></Button>
                  </CardBlock>
                </Card>
              </Col>
            </Row>
          </TabPane>   
        </TabContent>
      </div>       
    )
  }
}

export default class ZWallet extends React.Component {
  constructor(props) {
    super(props);

    this.resetKeys = this.resetKeys.bind(this)
    this.handleUnlockPrivateKeys = this.handleUnlockPrivateKeys.bind(this)
    this.setPrivateKeys = this.setPrivateKeys.bind(this)        
    this.setInsightAPI = this.setInsightAPI.bind(this)
    this.setUnlockType = this.setUnlockType.bind(this)
    this.setPublicAddressesKeyValue = this.setPublicAddressesKeyValue.bind(this)
    this.toggleUseTestNet = this.toggleUseTestNet.bind(this)
    this.toggleCompressPubKey = this.toggleCompressPubKey.bind(this)
    this.toggleShowSettings = this.toggleShowSettings.bind(this)
    this.toggleShowWalletGen = this.toggleShowWalletGen.bind(this)     

    this.state = {
      privateKeys : '',
      publicAddresses: null, // Public address will be {address: {privateKey: '', transactionURL: '', privateKeyWIF: ''}
      settings: {
        showSettings: false,
        showWalletGen: false,
        compressPubKey: true,
        insightAPI: 'https://explorer.myhush.org/api',
        explorerURL: 'https://explorer.myhush.org/',
        useTestNet: false,
        unlockType: UNLOCK_WALLET_TYPE.HD_WALLET
      }
    };  
  } 

  handleUnlockPrivateKeys(){    
    if (this.state.privateKeys.length === 0){
      return -2
    }

    try{
      var publicAddresses = {}

      function _privKeyToAddr(pk, compressPubKey, useTestNet){
        // If not 64 length, probs WIF format
        if (pk.length !== 64){
          pk = hushjs.address.WIFToPrivKey(pk)          
        }

        // Convert public key to public address
        const pubKey = hushjs.address.privKeyToPubKey(pk, compressPubKey)

        // Testnet or nah
        const pubKeyHash = useTestNet ? hushjs.config.testnet.pubKeyHash : hushjs.config.mainnet.pubKeyHash
        const publicAddr = hushjs.address.pubKeyToAddr(pubKey, pubKeyHash)

        return publicAddr
      }

      for (var i = 0; i < this.state.privateKeys.length; i++){
        const pubKeyHash = this.state.settings.useTestNet ? hushjs.config.testnet.wif : hushjs.config.mainnet.wif
        
        var c_pk_wif;
        var c_pk = this.state.privateKeys[i]

        // If not 64 length, probs WIF format
        if (c_pk.length !== 64){
          c_pk_wif = c_pk
          c_pk = hushjs.address.WIFToPrivKey(c_pk)
        }
        else{
          c_pk_wif = hushjs.address.privKeyToWIF(c_pk)
        }          

        var c_pk_wif = hushjs.address.privKeyToWIF(c_pk, true, pubKeyHash)        
        const c_addr = _privKeyToAddr(c_pk, this.state.settings.compressPubKey, this.state.settings.useTestNet)        

        publicAddresses[c_addr] = {
          privateKey: c_pk,
          privateKeyWIF: c_pk_wif,          
          confirmedBalance: 'loading...',
          unconfirmedBalance: 'loading...',  
        }
      }      

      // Set public address
      this.setPublicAddresses(publicAddresses)

      // Return success
      return 0
    } catch(err) {      
      this.setPublicAddresses(null)
      return -1
    }
  }

  resetKeys(){
    this.setState({
      privateKeys : '',
      publicAddresses: null,
    })
  }  

  // Only used for bip32 gen wallet because
  // of the async nature
  setPrivateKeys(pk, handleUnlockingKeys){
    if (handleUnlockingKeys === undefined){
      handleUnlockingKeys = false
    }
    this.setState({
      privateKeys: pk
    }, handleUnlockingKeys ? this.handleUnlockPrivateKeys : undefined)
  }

  setPublicAddresses(pa){
    this.setState({
      publicAddresses: pa
    })
  }

  setPublicAddressesKeyValue(address, key, value){
    var newPublicAddresses = this.state.publicAddresses
    newPublicAddresses[address][key] = value

    this.setState({
      publicAddresses: newPublicAddresses
    })
  }

  setInsightAPI(uri){    
    var _settings = this.state.settings
    _settings.insightAPI = uri

    this.setState({
      _settings: _settings
    })
  }  

  setUnlockType(t){
    var _settings = this.state.settings
    _settings.unlockType = t

    this.setState({
      _settings: _settings
    })
  }

  toggleCompressPubKey(b){
    var _settings = this.state.settings
    _settings.compressPubKey = !_settings.compressPubKey    

    this.setState({
      _settings: _settings
    })
  }

  toggleUseTestNet(){
    var _settings = this.state.settings
    _settings.useTestNet = !_settings.useTestNet

    if (_settings.useTestNet){
        _settings.insightAPI = 'https://testnet.myhush.org/api'
      _settings.explorerURL = 'https://testnet.myhush.org/'
    }
    else{
        _settings.insightAPI = 'https://explorer.myhush.org/api'
        _settings.explorerURL = 'https://explorer.myhush.org/'
    }

    this.setState({
      settings: _settings
    })    
  }

  toggleShowSettings(){
    var _settings = this.state.settings
    _settings.showSettings = !_settings.showSettings

    this.setState({
      settings: _settings
    })
  }

  toggleShowWalletGen(){
    var _settings = this.state.settings
    _settings.showWalletGen = !_settings.showWalletGen

    this.setState({
      settings: _settings
    })
  }

  render() {        
    return (
      <Container>
        <Row>
          <Col>
            <h1 className='display-6'><span className="main1">Hush Wallet</span>&nbsp;
              <ToolTipButton onClick={this.toggleShowSettings} id={1} buttonText={<MDSettings/>} tooltipText={'settings'}/>&nbsp;
              <ToolTipButton disabled={this.state.publicAddresses === null} onClick={this.resetKeys} id={2} buttonText={<FARepeat/>} tooltipText={'reset wallet'}/>
            </h1>
            <ZWalletSettings 
              setUnlockType={this.setUnlockType}              
              toggleShowSettings={this.toggleShowSettings}
              toggleCompressPubKey={this.toggleCompressPubKey}           
              toggleShowWalletGen={this.toggleShowWalletGen}
              toggleUseTestNet={this.toggleUseTestNet}           
              setInsightAPI={this.setInsightAPI}
              settings={this.state.settings}
              publicAddresses={this.state.publicAddresses}
            />
            <br/>
          </Col>
        </Row>
        <Row>
          <Col>
            { this.state.publicAddresses === null ?
              (                                              
                <ZWalletUnlockKey
                handleUnlockPrivateKeys={this.handleUnlockPrivateKeys}
                setPrivateKeys={this.setPrivateKeys}
                unlockType={this.state.settings.unlockType}
                />                
              )
              :
              (<ZWalletTabs
                publicAddresses={this.state.publicAddresses}
                settings={this.state.settings}
                setPublicAddressesKeyValue={this.setPublicAddressesKeyValue}
                privateKeys={this.state.privateKeys}
              />)
            }
          </Col>
        </Row>
        <Row>
          <Col>
            { this.state.settings.showWalletGen ?
              (<div><br/><hr/><ZWalletGenerator settings={this.state.settings}/></div>) : null
            }
          </Col>
        </Row>
      </Container>
    );
  }
}