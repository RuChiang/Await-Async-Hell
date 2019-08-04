const bcolors = {
    HEADER : '\033[95m',
    OKBLUE : '\033[94m',
    OKGREEN : '\033[92m',
    WARNING : '\033[93m',
    FAIL : '\033[91m',
    ENDC : '\033[0m',
    BOLD : '\033[1m',
    UNDERLINE : '\033[4m',
}

class testFunc {
  constructor(){}

  async noPromise(){
    console.log(bcolors.OKBLUE + 'In noPromise' + bcolors.ENDC);
  }

  async noPromiseWithTimeout(){
    setTimeout(()=>{
      console.log(bcolors.OKGREEN + 'In noPromiseWithTimeout, after 3 secs' + bcolors.ENDC);
    },3000);
  }

  async explicitPromise(){
    console.log(bcolors.WARNING + 'In explicitPromise' + bcolors.ENDC);
    return Promise.resolve('done');
  }

  async explicitPromiseWithTimeout(){
    return new Promise((resolve, reject)=>{
      setTimeout(()=>{
        console.log(bcolors.HEADER + 'In explicitPromiseWithTimeout, after 3 secs' + bcolors.ENDC);
        resolve('done');
      },3000);
    });
  }
}



module.exports = new testFunc();
