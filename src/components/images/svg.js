import React from 'react';

//Use https://jakearchibald.github.io/svgomg/ for minify svg file
//Use https://svg2jsx.com/ for convert SVG to JSX

export function Reddit(props) {
    const size = props.size
    
    return (
      <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 1000 1000" >
        <path d="M261.6,449.7c-9.8-7.7-21.9-12.1-34.4-12.1c-30.8,0-55.8,25.1-55.8,55.9c0,17.8,8.6,34.3,22.6,44.7C205.6,505,229.2,474.8,261.6,449.7z"/>
        <path d="M739.3,311.9c23,0,41.7-18.7,41.7-41.7s-18.7-41.7-41.7-41.7c-23,0-41.7,18.7-41.7,41.7S716.3,311.9,739.3,311.9z"/>
        <path d="M500,10C229.4,10,10,229.4,10,500c0,270.6,219.4,490,490,490s490-219.4,490-490C990,229.4,770.6,10,500,10z M809.3,561.7c1.3,7.7,2.2,15.5,2.2,23.5c0,114.7-140.4,208-312.9,208c-172.5,0-312.9-93.3-312.9-208c0-8.5,1-16.7,2.5-24.9c-23.5-13.8-38.4-39.1-38.4-66.8c0-42.8,34.8-77.6,77.5-77.6c19.5,0,38.1,7.8,52.4,20.9c55.2-36,130.3-58.4,213.2-59.4l48.3-152.7c1.7-5.4,7.4-8.6,12.9-7.3l126.4,29.7c9.2-23.6,32.1-40.4,59-40.4c35,0,63.4,28.5,63.4,63.4c0,35-28.5,63.4-63.4,63.4c-35,0-63.4-28.5-63.4-63.4c0-0.6,0.1-1.1,0.2-1.7l-117.2-27.6l-43.3,136.9c79.3,2.8,150.9,25.1,203.8,60.2c14.4-13.9,33.2-22,53.5-22c42.8,0,77.6,34.8,77.6,77.6C850.3,522.5,834.4,548.3,809.3,561.7z"/>
        <path d="M347.5,546.8c0-25.5,20.7-46.2,46.2-46.2c25.5,0,46.2,20.7,46.2,46.2c0,25.5-20.7,46.2-46.2,46.2C368.2,592.9,347.5,572.2,347.5,546.8z M612,683.6c-23.3,23.3-59.8,34.6-111.6,34.6c-0.1,0-0.2-0.1-0.4-0.1s-0.2,0.1-0.4,0.1c-51.9,0-88.4-11.3-111.6-34.6c-4.2-4.2-4.2-11.1,0-15.4c4.2-4.2,11.1-4.2,15.4,0c19,19,50.5,28.2,96.3,28.2c0.1,0,0.2,0.1,0.4,0.1s0.2-0.1,0.4-0.1c45.8,0,77.3-9.2,96.3-28.2c4.3-4.2,11.1-4.2,15.4,0C616.3,672.5,616.3,679.4,612,683.6z M606.5,592.9c-25.4,0-46.2-20.7-46.2-46.2c0-25.5,20.7-46.2,46.2-46.2s46.2,20.7,46.2,46.2C652.7,572.2,632,592.9,606.5,592.9z"/>
        <path d="M772.7,437.7c-13.3,0-25.8,4.8-35.8,13.2c32.3,25.2,55.5,55.6,66.8,89c15.4-10.2,24.9-27.3,24.9-46.3C828.6,462.7,803.6,437.7,772.7,437.7z"/>
      </svg>
    )
}


export function Invisible(props) {
  const size = props.size
  
  return (
   <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 875 1000"/>
  )
}

export function Twitter(props) {
    const size = props.size
    
    return (
    <svg width={size} height={size} viewBox="0 0 510 510">
      <path d="M459 0H51C22.95 0 0 22.95 0 51v408c0 28.05 22.95 51 51 51h408c28.05 0 51-22.95 51-51V51c0-28.05-22.95-51-51-51zm-58.65 186.15c-2.55 117.3-76.5 198.9-188.7 204-45.9 2.55-79.05-12.75-109.65-30.6 33.15 5.101 76.5-7.649 99.45-28.05-33.15-2.55-53.55-20.4-63.75-48.45 10.2 2.55 20.4 0 28.05 0-30.6-10.2-51-28.05-53.55-68.85 7.65 5.1 17.85 7.65 28.05 7.65-22.95-12.75-38.25-61.2-20.4-91.8 33.15 35.7 73.95 66.3 140.25 71.4-17.85-71.4 79.051-109.65 117.301-61.2 17.85-2.55 30.6-10.2 43.35-15.3-5.1 17.85-15.3 28.05-28.05 38.25 12.75-2.55 25.5-5.1 35.7-10.2-2.551 12.75-15.301 22.95-28.051 33.15z"/>
    </svg>
    )
}

export function Telegram(props) {
  const size = props.size
  
  return (
    <svg width={size} height={size} viewBox="0 0 240 240">
      <circle cx="120" cy="120" r="120"></circle>
      <path
        fill="#fff"
        d="M49.9 119l80.8-33.3c8-3.5 35-14.6 35-14.6s12.5-4.9 11.4 6.9c-.3 4.9-3.1 21.8-5.9 40.2l-8.7 54.4s-.7 8-6.6 9.4-15.6-4.9-17.3-6.2c-1.4-1-26-16.6-35-24.3-2.4-2.1-5.2-6.2.3-11.1 12.5-11.4 27.4-25.7 36.4-34.7 4.2-4.2 8.3-13.9-9-2.1l-48.9 32.9s-5.6 3.5-16 .3-22.4-7.1-22.4-7.1-8.3-5.2 5.9-10.7z"
      ></path>
    </svg>
  )
}

export function Discord(props) {
  const size = props.size
  
  return (
  <svg width={size} height={size} viewBox='0 0 875 1000'>
    <path d="M347 419.5c-28.5 0-51 25-51 55.5s23 55.5 51 55.5c28.5 0 51-25 51-55.5.5-30.5-22.5-55.5-51-55.5zm182.5 0c-28.5 0-51 25-51 55.5s23 55.5 51 55.5c28.5 0 51-25 51-55.5s-22.5-55.5-51-55.5z"/>
    <path d="M772.5 0h-670C46 0 0 46 0 103v676c0 57 46 103 102.5 103h567L643 789.5l64 59.5 60.5 56 107.5 95V103C875 46 829 0 772.5 0zm-193 653s-18-21.5-33-40.5C612 594 637 553 637 553c-20.5 13.5-40 23-57.5 29.5-25 10.5-49 17.5-72.5 21.5-48 9-92 6.5-129.5-.5C349 598 324.5 590 304 582c-11.5-4.5-24-10-36.5-17-1.5-1-3-1.5-4.5-2.5-1-.5-1.5-1-2-1.5-9-5-14-8.5-14-8.5s24 40 87.5 59c-15 19-33.5 41.5-33.5 41.5-110.5-3.5-152.5-76-152.5-76 0-161 72-291.5 72-291.5 72-54 140.5-52.5 140.5-52.5l5 6c-90 26-131.5 65.5-131.5 65.5s11-6 29.5-14.5c53.5-23.5 96-30 113.5-31.5 3-.5 5.5-1 8.5-1 30.5-4 65-5 101-1 47.5 5.5 98.5 19.5 150.5 48 0 0-39.5-37.5-124.5-63.5l7-8s68.5-1.5 140.5 52.5c0 0 72 130.5 72 291.5 0 0-42.5 72.5-153 76z"/>
  </svg>
  )
}

export function Github(props) {
  const size = props.size
  
  return (
  <svg width={size} height={size} viewBox="0 0 1024 1024">
	  <path d="M512 0C229.1 0 0 229.1 0 512c0 226.6 146.6 417.9 350.1 485.8 25.6 4.5 35.2-10.9 35.2-24.3 0-12.2-.6-52.5-.6-95.4-128.6 23.7-161.9-31.4-172.2-60.2-5.8-14.7-30.7-60.2-52.5-72.3-17.9-9.6-43.5-33.3-.6-33.9 40.3-.6 69.1 37.1 78.7 52.5 46.1 77.4 119.7 55.7 149.1 42.2 4.5-33.3 17.9-55.7 32.6-68.5-113.9-12.8-233-57-233-252.8 0-55.7 19.8-101.8 52.5-137.6-5.1-12.8-23-65.3 5.1-135.7 0 0 42.9-13.4 140.8 52.5 41-11.5 84.5-17.3 128-17.3s87 5.8 128 17.3c97.9-66.6 140.8-52.5 140.8-52.5 28.2 70.4 10.2 122.9 5.1 135.7 32.6 35.8 52.5 81.3 52.5 137.6 0 196.5-119.7 240-233.6 252.8 18.6 16 34.6 46.7 34.6 94.7 0 68.5-.6 123.5-.6 140.8 0 13.4 9.6 29.4 35.2 24.3C877.4 929.9 1024 737.9 1024 512 1024 229.1 794.9 0 512 0z"/>
  </svg>
  )
}

export function Bitcointalk(props) {
  const size = props.size
  
  return (
    <svg width={size} height={size} viewBox="0 0 90.8 132">
      <path d="M35.1 36v21.1h17.6c2.9 0 5.5-1.2 7.5-3.1 1.9-1.9 3.1-4.6 3.1-7.5S62.1 41 60.2 39c-1.9-1.9-4.6-3.1-7.5-3.1l-17.6.1zm23.1 75.2V132H42.9v-20.7h-5.3V132H22.3v-20.7H.2L3.1 96h10.1c3.7 0 6.6-3 6.6-6.6V42.5c0-3.7-3-6.6-6.6-6.6H0V20.5h22.3V0h15.3v20.6h5.3V0h15.3v21.2c5 1.1 9.4 3.6 12.9 7 4.7 4.7 7.6 11.2 7.6 18.3 0 4.8-1.3 9.2-3.6 13.1 2.9 1.4 5.5 3.2 7.8 5.4 4.9 4.9 7.9 11.7 7.9 19.1 0 7.4-3 14.2-7.9 19.1s-11.7 7.9-19.1 7.9l-5.6.1zM35.1 72.5v23.4h28.7c3.2 0 6.1-1.3 8.3-3.4 2.1-2.1 3.4-5.1 3.4-8.3 0-3.2-1.3-6.1-3.4-8.3s-5.1-3.4-8.3-3.4H35.1z"/>
    </svg>
  )
}

export function Unlock(props) {
  const size = props.size
  
return (
<svg width={size} height={size} viewBox="0 0 1000 1000">
	<path d="M806.3 500c17 0 31.5 6 43.4 17.9 11.9 11.9 17.9 26.4 17.9 43.4v367.5c0 17-6 31.5-17.9 43.4-12 11.8-26.4 17.8-43.4 17.8H193.8c-17 0-31.5-6-43.4-17.9-11.9-11.9-17.9-26.4-17.9-43.4V561.3c0-17 6-31.5 17.9-43.4 11.9-11.9 26.4-17.9 43.4-17.9h20.4V295.8c0-78.7 28-146 83.9-201.9C354 38 421.3 10 500 10s146 28 201.9 83.9c55.9 55.9 83.9 123.2 83.9 201.9 0 11.1-4 20.6-12.1 28.7-8.1 8.1-17.7 12.1-28.7 12.1h-40.8c-11.1 0-20.6-4-28.7-12.1-8.1-8.1-12.1-17.7-12.1-28.7 0-45.1-16-83.6-47.9-115.5-31.9-31.9-70.4-47.9-115.5-47.9-45.1 0-83.6 16-115.5 47.9s-47.9 70.4-47.9 115.5V500h469.7z"/>
</svg>
  )
}

export function Setting(props) {
const size = props.size
const color = props.color
  
return (
<svg width={size} height={size} viewBox="0 0 1000 1000">
	<path d="M430.8 14.3c-16 2.1-29.8 4.6-30.6 5.5-.8.8-21.8 134.3-21.8 139.4 0 .4-15.5 8-34.4 17.2-19.3 9.2-43.6 23.5-54.6 31.9-10.9 8.4-21.4 15.1-23.5 15.1s-31.9-11.3-66.3-24.8l-62.5-24.8-9.2 8.8c-25.6 23.5-87.3 130.9-90.2 157-.8 7.5 9.2 18 50.8 51.2l52.5 42 .4 67.6.4 67.6-54.2 42c-61.3 48.3-58.3 39-30.2 99.1 18.5 39.5 53.3 93.6 70.5 109.1l9.2 8.8 62.5-24.8c34.4-13.4 64.2-24.8 66.3-24.8s12.6 6.7 23.5 15.1c10.9 8.4 35.3 22.7 54.6 31.9 18.9 9.2 34.4 16.8 34.4 17.2s4.6 30.6 10.1 67.2c5 36.5 11.3 68 13.9 70.5 8.4 8.4 95.3 13.8 144.8 8.8 25.6-2.5 48.7-6.7 50.8-8.8 2.5-2.5 22.7-117.1 23.9-137.7 0-.8 12.6-6.7 27.7-13.8 15.1-6.7 39.5-21 54.6-31.5s29-18.9 30.6-18.9 31.5 11.3 65.9 24.8l62.5 25.2 14.3-15.5c21-23.1 49.5-68.4 67.6-107 25.6-55 28.5-46.6-32.3-94.4l-53.7-42.4V432.8l52.5-41.5c41.1-33.2 52-44.1 51.2-51.2-3.4-26.9-64.6-133.9-90.2-157.4l-9.2-8.8-63 24.8c-34.4 13.4-64.6 24.8-66.3 24.8-2.1 0-12.2-6.7-23.1-15.1-10.9-8.4-35.3-22.7-54.2-31.9-30.6-14.7-34.8-18.1-36.9-29.8-1.3-7.6-5.9-39-10.9-70.1-4.6-31.1-8.8-56.7-9.2-57.1-.4-.4-16.8-2.9-36.1-5.5-41.4-5.6-91.4-5.1-132.9.3zm133 353.4c29 14.7 53.7 39 69.3 69.7 10.5 20.6 11.8 27.7 11.8 63s-1.3 42.4-11.8 63c-15.5 30.2-40.3 55-69.3 69.7-21.4 10.9-28.1 12.2-63.8 12.2-35.3 0-42.8-1.3-63.4-11.8-28.1-13.4-59.6-45.8-72.2-73.5-13-28.1-13-91.1-.4-118.8 9.6-21 33.6-49.1 52.9-63 38.6-27.7 102.4-32.3 146.9-10.5z" fill={color}/>
</svg>
  )
}

export function Menu(props) {
  const size = props.size
    
  return (
    <svg width={size} height={size} viewBox="0 0 32 32">
      <path d="M4 10h24c1.1 0 2-.9 2-2s-.9-2-2-2H4c-1.1 0-2 .9-2 2s.9 2 2 2zm24 4H4c-1.1 0-2 .9-2 2s.9 2 2 2h24c1.1 0 2-.9 2-2s-.9-2-2-2zm0 8H4c-1.1 0-2 .9-2 2s.9 2 2 2h24c1.1 0 2-.9 2-2s-.9-2-2-2z" fill="#fff"/>
    </svg>
  )
}

export function ContentCopy(props) {
  const size = props.size
  const color = props.color
    
  return (
  <svg width={size} height={size} viewBox="0 0 1000 1000">
	  <path d="M702.5 0H157.1c-50.2 0-90.9 40.7-90.9 90.9v636.4h90.9V90.9h545.5L702.5 0zm136.4 181.8h-500c-50.2 0-90.9 40.7-90.9 90.9v636.4c0 50.2 40.7 90.9 90.9 90.9h500c50.2 0 90.9-40.7 90.9-90.9V272.7c0-50.2-40.7-90.9-90.9-90.9zm0 727.3h-500V272.7h500v636.4z" fill={color}/>
  </svg>
    )
  }

export function Eye(props) {
    const size = props.size
      
    return (
      <svg width={size} height={size} viewBox="0 0 576 512">
        <path d="M569.4 231.6C513 135.9 407.8 72 288 72 168.1 72 63 136 6.6 231.6c-8.9 15-8.9 33.7 0 48.7C63 376.1 168.2 440 288 440c119.9 0 225-64 281.4-159.6 8.8-15.1 8.8-33.7 0-48.8zM288 392c-102.6 0-192.1-54.7-240-136 44.2-74.9 123.7-127.3 216.2-135 9.8 10.1 15.8 23.8 15.8 39 0 30.9-25.1 56-56 56s-56-25.1-56-56c-10.2 19.1-16 40.9-16 64 0 75.1 60.9 136 136 136s136-60.9 136-136c0-31-10.4-59.6-27.9-82.5C451.7 164.6 498 205.1 528 256c-47.9 81.3-137.4 136-240 136z" fill="#fff"/>
      </svg>
    )
  }

export function EyeSlash(props) {
  const size = props.size
    
  return (
    <svg width={size} height={size} viewBox="0 0 576 512">
      <path d="M303.3 359.1c80.5-9 136.2-86.9 116.9-167l-116.9 167zM288 392c102.6 0 192.1-54.7 240-136-21.8-36.9-52.1-68.3-88.3-91.7l27.5-39.3c41.8 27.2 76.9 63.7 102.2 106.6 8.9 15 8.9 33.7 0 48.7C513 376 407.9 440 288 440c-13.3 0-26.5-.8-39.6-2.4l32-45.7c2.5.1 5.1.1 7.6.1zM6.6 280.4C39.8 336.8 90 382.1 150.2 409.9l-48.1 68.7c-3.8 5.4-2.5 12.9 2.9 16.7l20.7 14.5c5.4 3.8 12.9 2.5 16.7-2.9L473.9 33.4c3.8-5.4 2.5-12.9-2.9-16.7L450.2 2.2c-5.4-3.8-12.9-2.5-16.7 2.9L378 84.4C349.4 76.3 319.2 72 288 72 168.1 72 63 136 6.6 231.6c-8.8 15.1-8.8 33.7 0 48.8zM48 256c44.2-74.9 123.7-127.3 216.2-135 9.8 10.1 15.8 23.8 15.8 39 0 30.9-25.1 56-56 56s-56-25.1-56-56c-30.6 57.3-16.7 130.3 36.9 171.7l-26.7 38.1C123.4 346.6 77.7 306.4 48 256z" fill="#fff"/>
    </svg>
    )
  }

export function Redo(props) {
  const size = props.size
  const color = props.color

  return (
  <svg width={size} height={size} viewBox="0 0 1000 1000">
  	<path d="M959.1 305.9c-27.3-63.9-63.6-114.2-104.5-159.8-45.5-45.7-100-82.2-159.1-105C631.8 13.6 568.2-.1 500-.1c-63.6 0-127.3 13.7-186.4 36.5S200 95.8 154.5 136.9L72.7 54.7C59.1 41 40.9 36.5 27.3 45.6 9.1 54.7 0 63.9 0 82.1v292.2c0 9.1 4.5 22.8 13.6 27.4 9.1 9.1 18.2 13.7 27.3 13.7h290.9c18.2 4.6 31.8-4.6 40.9-22.8s4.5-32-9.1-45.7l-90.9-91.3c31.8-27.4 63.6-50.2 104.5-63.9 40.9-13.7 81.8-22.8 122.7-22.8 45.5 0 86.4 9.1 127.3 27.4s77.3 41.1 104.5 73.1c31.8 32 54.5 63.9 72.7 105 18.2 41.1 27.3 82.2 27.3 127.9s-9.1 86.8-27.3 127.9c-18.2 41.1-40.9 77.6-72.7 105-31.8 32-63.6 54.8-104.5 73.1-40.9 18.3-86.4 27.4-127.3 27.4-50 0-100-9.1-145.5-32s-86.4-54.8-118.2-95.9c-4.5-4.6-9.1-9.1-13.6-9.1s-13.6 0-18.2 4.6l-90.9 91.3c-4.5 4.6-4.5 9.1-4.5 13.7s0 9.1 4.5 13.7C159 881.4 218 922.5 286.2 954.4c68.2 32 136.4 45.7 213.6 45.7 68.2 0 131.8-13.7 195.5-41.1s113.6-63.9 159.1-105c45.6-45.8 82-100.6 104.7-160 27.3-63.9 40.9-127.9 40.9-196.3 0-64-13.6-127.9-40.9-191.8" fill={color}/>
  </svg>
  )
}

export function Hush(props) {
  const size = props.size
  const color = props.color

  return (
  <svg width={size} height={size} viewBox="0 0 1000 1000">
	  <path className="st0" d="M478 2c-5.1 1.4-9.3 4.3-15.3 10.3-13 13.2-12.7 10.7-12.7 97.2.1 65.9.3 73.5 2.3 70.9 5.3-7.2 11.4-12.6 18.3-16.2 6.1-3.1 9.3-3.9 19.4-4 18.6-.1 33.3 6.9 41.6 20.2 2.7 4.3 2.7 3.4 2.4-72.2-.4-74.4-.6-76.6-3.4-83.1C521.3 5.3 499.2-4.6 478 2zM317.4 49.8c-15 2-26.7 10.4-33.2 24.2l-3.7 7.9V452.2l4 8.1c9.3 18.9 29.3 27.6 50.3 21.9 7.7-2 10.6-3.7 17-10 14.2-14 13 4.7 13-205.2 0-177.3-.1-184-2.7-190.7-6.8-17.9-25.5-29.1-44.7-26.5zM658.9 49.9c-12.2 2.1-22.7 9.2-29 19.2-7.4 11.7-7.3 11.2-7.3 134.8.1 63.3.4 117.1 1 119.4 2.6 13.1 12.6 25.7 25 31.5 9.6 4.3 25.6 4.2 34.9-.6 9.2-4.6 16.3-12 20.9-21.5l3.7-7.9.1-117.2c0-64.5-.4-120-1.1-123.4-4.2-22.6-26.2-38.1-48.2-34.3zM151.6 142.6c-13.3 2.7-24.6 11.4-30.7 23.9l-3.3 6.9V791l4 8.1c14.4 29.3 54.9 31.7 73.6 4.6 7.3-10.6 7 1.6 6.7-324.4l-.1-304.6-3.2-7.2c-3.9-8.3-11.7-17-18.9-20.7-4.4-2.3-18.6-6-21.2-5.6-.5.2-3.6.8-6.9 1.4zM829.5 143.3c-13.1 3.9-21.9 11.4-27.6 23.6l-3.7 7.9v614.8l4 8.6c7.6 16.2 20.2 24 38.2 24.2 18.3 0 31.6-8.4 39.2-24.7l3-6.6V173.3l-3.3-6.9c-1.7-3.7-5.4-9-8.2-11.7-9.8-10-28.8-15.3-41.6-11.4zM475 250.4c-8.3 3.9-16.9 12-21.2 20.2-3 5.6-3.1 7.4-3.6 65.8-.3 32.9-.1 61.2.3 62.9.4 1.6 3.6 5.7 6.9 9.3 3.4 3.6 9.7 10.7 14 15.7 4.3 5.1 8.1 9.6 8.6 10 .4.4 2.9 3.3 5.6 6.4 25.2 29.6 30.5 33.2 42 28.6 6.7-2.7 6.7-3.4 6.7-99l-.1-89.8-4-8.6c-9.7-21.2-35-31.1-55.2-21.5zM656 443c-12 2.3-22.3 10.4-29.2 23.3l-3.2 5.9v407.5l3.3 6.3c8.6 16 21 23.6 38.9 23.6 21.5-.1 37.6-13.3 41.2-33.6 1.7-9.7 1.3-397.8-.4-403.8-2.1-7.6-9.6-17.7-17-23.3-7.7-5.8-21.4-8.1-33.6-5.9zM453.7 553.7c-2.1 2-3.7 5-3.9 7.4V637c0 81.5-.1 80.6 10.9 92.9 10.7 12 28.2 17 43 12.4 12.6-3.7 25-16.3 28.5-28.6.7-2.4 1.3-23.2 1.4-46l.3-41.9-15-17.5c-8.3-9.7-18.4-21.5-22.6-26.2-9.6-11-11.4-13.2-18.4-21.5-9.6-10.9-17.3-13.4-24.2-6.9zM311 569.3c-13 3.4-23.3 13-28.4 26.5-2.6 7-2.7 12.7-2.7 143.1 0 133.5.1 136 3 143.7 6.3 16.9 24 28.5 41.9 27.2 16.9-1.1 28.6-9.2 36.3-25l3.9-7.9V739.6c.1-94.7-.3-138.7-1.4-141.7-4.3-12.7-17.2-25.6-28.6-28.5-7.7-1.9-17.1-1.9-24-.1zM449.3 890.1c0 41.5.7 77.2 1.4 79.6 3.6 12.4 15.9 24.9 28.6 28.7 13.7 4 31.7-.1 41.9-9.9 2.7-2.6 6.6-7.9 8.6-11.7l3.9-7.1.3-77.7.4-77.8-6.4 7c-3.4 4-10 9-14.6 11.3-7 3.6-10.1 4.3-20.4 4.4-10.7.3-13.4-.3-20.9-3.6-5.1-2.4-11.6-7-15.9-11.3l-7.3-7.4.4 75.5z" fill={color}/>
  </svg>
  )
}