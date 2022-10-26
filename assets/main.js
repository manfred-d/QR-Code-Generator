const form = document.querySelector("form");
const qr = document.getElementById('qrcode');

const onGenerateSubmit = (e) => {
    e.preventDefault();
    
    clearUI();

    const url = document.getElementById('url').value;
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;
    

    if (url === '' ) {
        alert('Plese enter valid the url');
    }
    else{
        setTimeout(() => {
            generateCode(url,size,color);

            // download btn/url
            setTimeout(() => {
                const saveUrl = qr.querySelector('img').src;
                createSaveBtn(saveUrl);
            }, 50);
        }, 1000);
    }
}
// qr code Js
const generateCode = (url, size,color) =>{
    const qrcode = new QRCode('qrcode', {
        text:url,
        width:size,
        height:size,
        colorLight:color,
    });
}
// clear previous Code and Btn
const clearUI = () => {
    qr.innerHTML = '';
    const saveBtn = document.getElementById('savelink');
    if (saveBtn) saveBtn.remove();
}
// save Btn created
const createSaveBtn = (saveUrl) =>{
    const link = document.createElement('a');
    link.id = 'savelink';
    link.href = saveUrl;
    link.classList = 'btn';
    link.download = 'qrcode';
    link.innerHTML = 'Download Image';
    document.getElementById('generated').appendChild(link);
};

form.addEventListener('submit', onGenerateSubmit);