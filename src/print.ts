/**
 * @description: 调起浏览器打印窗口
 * @param {*}
 * @return {*}
 */
const windowPrint = () => {
  try {
    //部分safari无法通过window.print调起打印窗口
    const printResult = document.execCommand('print');

    //新版firefox调用document.execCommand会返回false，并且无法调起打印窗口
    if (printResult !== true){
      window.print();
    }
  } catch (error) {
    window.print();
  }
}

export const print = {
  windowPrint
}