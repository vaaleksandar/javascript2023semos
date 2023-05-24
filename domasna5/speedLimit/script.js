// 3.Write a function called SpeedLimits
// a.The function takes a number as a parametar, 
// which is the current speed that you're driving
// b.If the parameter is below the speed limit of 50, 
// then output in the console => "Safe driving. Continue."
// c.If the parameter is above the speed limit of 50, 
// every 5 kilometers there is a Penalty Point, 
// and so you output => "Speed Limit Crossed. Penalty points: " + Point
// d.If the driver gets more than 10 penalty points, 
// above the speed limit of 120, output => 'License Suspended'

let velocity =prompt ("Vnesi ja brzinata vo km/h")

function speed_Limit(velocity){
    let speed_Limit =50;
    let pennaltykm=5;
    let penaltyPoint =Math.floor((velocity-speed_Limit)/pennaltykm);

    if (velocity <= speed_Limit){
        console.log('Safe Driving')
    }else if (velocity >120 && penaltyPoint > 10){
       
        console.log(`Speed ${velocity}, Speed Limit Crossed. Penalty points ${penaltyPoint}.`);
        
    }else{console.log('Licence Suspended');
        
    }
}

// Math.floor (returns a number to a nearest Integer)

// console.log(speed_Limit(velocity));