
let ProjectInitial;
function GetUrl(id) {
    let d = document.getElementById(id);
    if (d != null)
        return d.value;
    return '';
}
function GetImg(image) {
    let d = document.getElementById('ImgPath');
    if (d != null)
        return d.value + '/' +image;
    return '';
}
function GetAvatarUrl() {
    return 'https://i0.wp.com/avatar-management--avatars.us-west-2.prod.public.atl-paas.net/initials/MM-2.png?ssl=1';
}
function ShowModal() {
    myModalEl = document.getElementById('exampleModalScrollable');
    myModalEl.addEventListener('hidden.bs.modal', modalHidden, false);
    let dropArea = document.getElementById('AttachemtsArea');
    dropArea.addEventListener('dragenter', handlerFunctionIn, false);
    dropArea.addEventListener('dragleave', handlerFunctionOut, false);
    dropArea.addEventListener('dragover', handlerFunctionIn, false);
    dropArea.addEventListener('drop', handleDrop, false);
    let modal = new bootstrap.Modal(myModalEl);
    modal.show();
    
    getRequest(GetUrl('ProjectAPIGetListUrl'), ShowFields, showError);
    //setTimeout(ShowFields,2000);

}

function SetProjectListHeader(projectsJSON) {
    
    let projects = JSON.parse(projectsJSON);
    let ProjectsList = document.getElementById('ProjectListHeader');
    let lih = document.createElement('li');
    let lihH = document.createElement('h6');
    lihH.classList.add('dropdown-header');
    lihH.innerText = 'Recent';
    lih.appendChild(lihH);
    ProjectsList.appendChild(lih);
    for (let i = 0; i < projects.length; i++) {
        //@* ProjectsList.appendChild(createDropDown(projects[i].Name, '@Url.PageLink("/Project")'));//' + projects[i].ProjectUrl));*@
        ProjectsList.appendChild(createDropDown(projects[i].Name, GetUrl('ProjectUrl')+'/' + projects[i].ProjectUrl));//' + projects[i].ProjectUrl));
    }

    ProjectsList.appendChild(createDropDownDivider());
    ProjectsList.appendChild(createDropDown('View all projects', GetUrl('ProjectsPageUrl')));
    ProjectsList.appendChild(createDropDown('Create project', GetUrl('CreateProjectPageUrl')));

    function createDropDown(text, href) {
        let liA = document.createElement('li');
        let aA = document.createElement('a');
        aA.classList.add('dropdown-item');
        aA.classList.add('p-2');
        aA.href = href;
        aA.innerText = text;
        liA.appendChild(aA);
        return liA;

    }

    function createDropDownDivider() {
        let lid = document.createElement('li');
        let lidH = document.createElement('hr');
        lidH.classList.add('dropdown-divider');
        lid.appendChild(lidH);
        return lid;
    }
}

function showError(xhr, status, error) {
    if (typeof error != 'undefined' && error != '') {
        createAlertToast("ERROR:" + error, true);
    } else {
        createAlertToast("ERROR:" + xhr.responseText, true);
    }
}

function modalHidden() {
    console.log('modalHidden');
    Hide('ProjectIdSelect');
    Hide('IssueType');
    Show('IssueTypeSpinner');
    Show('ProjectSpinner');
}




