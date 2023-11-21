const Singleton = (function () {
  let pManager;

  function ProcessManager() {
    this.numProcess = 0;
  }

  function createProcessManager() {
    pManager = new ProcessManager();
    return pManager;
  }

  return {
    getProcessManager: () => {
      if (!pManager) pManager = createProcessManager();
      return pManager;
    },
  };
})();

const processManager1 = Singleton.getProcessManager();
const processManager2 = Singleton.getProcessManager();
console.log(processManager1 === processManager2);
