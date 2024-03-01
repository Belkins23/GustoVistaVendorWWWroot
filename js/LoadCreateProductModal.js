
    //document.addEventListener("DOMContentLoaded", ready);

function ProductCreatePartialReady() {
    getRequest(GetUrl('BrandAPIUrlGetList'), ShowFields, showError);
    }
    function ShowFields(response) {
        //createAlertToast(response);
        let barnds = JSON.parse(response);
        LoadBrands(barnds);

        // Hide('ProjectFieldsSetSpinner');
    }

function LoadBrands(barnds) {
        let ProjectsSelect = document.getElementById('BrandIdSelect');
    deleteElementChilds(ProjectsSelect);
    let FisrtBrand;
    for (let i = 0; i < barnds.length; i++) {
        let selOption = document.createElement('option');
        selOption.text = barnds[i].Name;
        selOption.value = barnds[i].Id;
    ProjectsSelect.add(selOption);
    if (i == 0)
        FisrtBrand = barnds[i].Id;
        }
    Hide('BarndSpinner');
    Show('BrandIdSelect');
    getRequest(GetUrl('GetInitialUrl') + "?id=" + FisrtBrand, LoadBrandProductTypes, showError);


    }

    function CreateIssue() {
        let Issue = { };
    Issue.ProjectId = document.getElementById('BrandIdSelect').value;
    Issue.ProjectName = document.getElementById('BrandIdSelect').text;
    Issue.Status = document.getElementById('IssueState').value;
    Issue.Type = document.getElementById('IssueType').value;
    Issue.AuthorId = '123231';
    Issue.AuthorName = '123231 Name';
    let IssueFieldsSet = document.getElementById('IssueDynFields');
    let IssueFieldsSetValues = IssueFieldsSet.querySelectorAll('[issue-field="1"]');

    Issue.ExtraData = [];
    for (let i = 0; i < IssueFieldsSetValues.length; i++) {
            if (IssueFieldsSetValues[i].getAttribute('field-requared') == '1')
    {
                if(IssueFieldsSetValues[i].value == '')
    {
        IssueFieldsSetValues[i].classList.add('is-invalid');
    return;
                }    

            }
    Issue.ExtraData.push({
        FieldId: IssueFieldsSetValues[i].id,
    Name: IssueFieldsSetValues[i].getAttribute('field-name'),
    Value: IssueFieldsSetValues[i].value,
            });
        }

    let FD = new FormData();
    let Index = 0;
    for (let key in Issue) {
            if (Array.isArray(Issue[key])) {
                for (let i = 0; i < Issue[key].length; i++) {
                    for (let ArrayItemKey in Issue[key][i]) {
        FD.append(key + '[' + i + '].' + ArrayItemKey, Issue[key][i][ArrayItemKey]);
                    }
                }
            } else
    FD.append(key, Issue[key]);
        }
    submitForm(FD, GetUrl('CreateIssueUrl'), CreateIssueSuccess, showError);

    }
    function CreateIssueSuccess(response) {
        alert(response);
    }
    function LoadBrandProductTypes(response) {
        try {
        //let IssueTypes = JSON.parse(response);
        ProjectInitial = JSON.parse(response);
    let IssueTypeSelect = document.getElementById('IssueType');
    deleteElementChilds(IssueTypeSelect);

    FirstType = ProjectInitial.IssueTypes[0].Id;
    for (let i = 0; i < ProjectInitial.IssueTypes.length; i++) {
        let selOption = document.createElement('option');

    selOption.text = ProjectInitial.IssueTypes[i].Name;
    selOption.value = ProjectInitial.IssueTypes[i].Id;
    IssueTypeSelect.add(selOption);
            }
    Hide('IssueTypeSpinner');
    Show('IssueType');
    LoadStates(ProjectInitial.IssueStates);
    LoadFields(ProjectInitial.IssueTypes[0]);
    Hide('IssueFieldsSetSpinner');
        } catch (e) {
        createAlertToast('Load issue types Error:' + e);
        }
    }
    function IssueTypeChanged(select) {

        for (let i = 0; i < ProjectInitial.IssueTypes.length; i++) {
            if (ProjectInitial.IssueTypes[i].Id == select.value) {
        LoadFields(ProjectInitial.IssueTypes[i]);
    return;
            }
        }
    }
    function LoadStates(States, id, currentState) {
        let IssueStateSelect;
    if (id == null)
    IssueStateSelect = document.getElementById('IssueState');
    else
    IssueStateSelect = document.getElementById(id);
    if (IssueStateSelect == null)
    return;
    deleteElementChilds(IssueStateSelect);
    for (let i = 0; i < States.length; i++) {
        let selOption = document.createElement('option');

    selOption.text = States[i].Name;
    selOption.value = States[i].Id;
    if (currentState != null)
    if (currentState == selOption.value) {
        selOption.selected = true;
                }
    IssueStateSelect.add(selOption);
        }
    }
    function LoadFields(IssueType) {
        let IssueFieldsSet = document.getElementById('IssueDynFields');
    deleteElementChilds(IssueFieldsSet);
    for (let i = 0; i < IssueType.Fields.length; i++) {
        let Div = document.createElement('div');
    Div.classList.add('nm-modal-body-section');
    let Label = document.createElement('label');
    Label.classList.add('form-label');
    Label.innerText = IssueType.Fields[i].Name;
    let RequariedSpan = document.createElement('span');
    RequariedSpan.style.color = 'red';
    RequariedSpan.innerText = '*';
    Label.appendChild(RequariedSpan);
    Label.setAttribute('for', IssueType.Fields[i].Id);
    let input;

    switch (IssueType.Fields[i].Type) {
                case 1:
    {
        input = document.createElement('textarea');
    input.rows = 3;
    input.type = 'text';
    input.id = IssueType.Fields[i].Id;
    input.name = IssueType.Fields[i].Name;
    input.classList.add('form-control');
    input.style.resize = 'none';
    input.setAttribute('field-requared', '1');

    break;
                    }
    default:
    {
        input = document.createElement('input');
    input.type = 'text';
    input.id = IssueType.Fields[i].Id;
    input.classList.add('form-control');
    input.setAttribute('field-requared', '1');

    break;
                    }
            }
    input.setAttribute('field-name', IssueType.Fields[i].Name);
    input.setAttribute('issue-field', '1');
    Div.appendChild(Label);
    Div.appendChild(input);
    IssueFieldsSet.appendChild(Div);
        }
    }
    function Show(elemId) {
        let elem = document.getElementById(elemId);
    if (elem != null) {
        let ShoEl = new bootstrap.Collapse(elem);
    ShoEl.show();
        }
    }
    function Hide(elemId) {
        let elem = document.getElementById(elemId);
    if (elem != null) {
        let ShoEl = new bootstrap.Collapse(elem);
    ShoEl.hide();
        }
    }
    function handlerFunctionIn() {
        event.preventDefault();
    document.getElementById('AttachemtsAreaBorder').classList.add("border-dark");
    console.log('handlerFunctionIn');
    }
    function handlerFunctionOut() {

        document.getElementById('AttachemtsAreaBorder').classList.remove("border-dark");
    console.log('handlerFunctionOut');
    }
    function handleDrop(event) {
        event.preventDefault();
    console.log('handleDrop');
    let dt = event.dataTransfer;
    let files = dt.files;
    handleFiles(files);
    }
    function handleFiles(files) {
        console.log('handleFiles');
    ([...files]).forEach(uploadFile);
    }
    function uploadFile(file) {
        let url = 'ВАШ URL ДЛЯ ЗАГРУЗКИ ФАЙЛОВ'
    alert(file.name);
        //let formData = new FormData()
        //formData.append('file', file)
        //fetch(url, {
        //    method: 'POST',
        //    body: formData
        //})
        //    .then(() => { /* Готово. Информируем пользователя */ })
        //    .catch(() => { /* Ошибка. Информируем пользователя */ })
    }

    function GetProjectIssueTypes() {

    }
