import ExpensiveWorker from "./expensiveShim";

console.log("create worker instance!");
let instance = new ExpensiveWorker();

export const expensiveAsync = async (): Promise<number> => {
  console.log("Start worker job");

  const p: Promise<number> = new Promise((res, rej) => {
    instance
      .expensive(1000)
      .then((count: number) => {
        console.log("Worker exit");
        console.log(`Ran ${count} loops`);
        res(count);
      })
      .catch((e: Error) => {
        console.error(e);
        rej("Worker error");
      });
  });
  return p;
};
