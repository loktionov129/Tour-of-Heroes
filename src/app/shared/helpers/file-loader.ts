export class FileLoader {
  public static download(filename: string, data: Object): void {
    data = encodeURIComponent(JSON.stringify(data));
    const element = document.createElement('a');
    element.setAttribute('href', 'data:application/json;charset=utf-8,' + data);
    element.setAttribute('download', filename);
    element.style.display = 'none';

    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  }

  // TODO: FIX THIS TSLINT-ERRORS
  public static readFile(fileInput: HTMLInputElement): Promise<string> {
    if (!window.FileReader || !window.File) {
      return Promise.reject('The File APIs are not fully supported in this browser.');
    }

    const file = fileInput.files[0];
    if (!file) {
      return Promise.reject('No File');
    }

    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = ((theFile) => {
        return (e) => {
          fileInput.value = '';
          resolve(e.target.result);
        };
      })(file);
      reader.readAsText(file);
    });
  }
}
