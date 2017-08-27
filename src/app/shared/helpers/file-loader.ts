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

  public static readFile(fileInput: HTMLElement): Promise<string> {
    if (!window.FileReader || !window.File) {
      return Promise.reject('The File APIs are not fully supported in this browser.');
    }

    const file = fileInput.files[0];

    return new Promise((resolve, reject) => {
      if (!file) {
        reject('No File');
      }

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
