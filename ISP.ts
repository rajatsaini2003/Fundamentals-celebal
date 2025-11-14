// Violation of ISP: A single 'Worker' interface with methods that not all workers need.
class WorkerMine {
  work() { throw new Error('Implement work()'); }
  eat() { throw new Error('Implement eat()'); }
  sleep() { throw new Error('Implement sleep()'); }
}

class RobotMine extends WorkerMine {
  work() { console.log('Robot is working'); }
  eat() { /* Robots don't eat, so this method is irrelevant */ }
  sleep() { /* Robots don't sleep, so this method is irrelevant */ }
}

// Adhering to ISP: Create smaller, more specific interfaces.
class WorkableMine {
  work() { throw new Error('Implement work()'); }
}

class FeedableMine {
  eat() { throw new Error('Implement eat()'); }
}

class RestableMine {
  sleep() { throw new Error('Implement sleep()'); }
}

class HumanWorkerMine extends WorkableMine implements FeedableMine, RestableMine {
  work() { console.log('Human is working'); }
  eat() { console.log('Human is eating'); }
  sleep() { console.log('Human is sleeping'); }
}

class RobotWorkerMine extends WorkableMine {
  work() { console.log('Robot is working'); }
}

let obj = new HumanWorkerMine();
obj.work();
obj.eat();
obj.sleep();