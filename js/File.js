class UploadFileClass
{
    constructor(AppendFileUrl, SuccessCallBack, ErrorCallBack)
    {
        this.AppendFileUrl = AppendFileUrl;
        this.SuccessCallBack = SuccessCallBack;
        this.ErrorCallBack = ErrorCallBack;
    }

    CreateFile(file, url, CreateFileSuccess, CreateFileError)
    {            
        this.RequestJSON({ Name: file.name, Type: file.type }, url, CreateFileSuccess, CreateFileError, [file]);
    }

    ReadPart(PartIndex, file, fileId)
    {
        
        let MaxReadLength = 1024 * 1024 * 512;//512KB
        let ReadLength = MaxReadLength;

        if ((PartIndex) * ReadLength > file.size)
            ReadLength = file.size - (PartIndex) * ReadLength;
        if (ReadLength <= 0) {
            
            this.SuccessCallBack(fileId);
            return;
        }
        let reader = new FileReader();
        let FileMapping = file.slice(PartIndex * ReadLength, ReadLength);
        reader.readAsDataURL(FileMapping);

        reader.onloadend =  (evt)=>
        {
            if (evt.target.readyState == FileReader.DONE)  // DONE == 2
            {
                this.AppendBlob(fileId, evt.target.result, PartIndex, file);                
            }
        };
        reader.onerror = ()=>
        {
            
            
            this.ErrorCallBack(reader.error);
        };
    }

    RequestJSON(formData, url, successCallBack, errorCallBack, successCallBackParams, ...args)
    {

        
        $.ajax({
            type: "POST",
            url: url,
            processData: false,
            data: JSON.stringify(formData),
            contentType: 'application/json; charset=utf-8',    
            error: function (xhr, status, error, args) {      
                console.log('RequestJSON error', xhr, status, error);
                errorCallBack(xhr, status, error,args);
            },
            success: function (response) {
                successCallBack(response, successCallBackParams, args);
            }
        });
    }


    AppendBlob(fileId, base64Data, PartIndex, file)
    {    
        base64Data = base64Data.substr(37);    
        alert(this)
        this.RequestJSON({ Id: fileId, Data: base64Data }, this.AppendFileUrl, this.AppendBlobSuccess, this.ErrorCallBack, [PartIndex + 1, file, fileId,this]);

    }


    AppendBlobSuccess(response, params)
    {        
        params[3].ReadPart(params[0], params[1], params[2]);
    }
}