function IssueDetailsModal(issueId, _ProjectName)
{
    let ModalDialog = document.createElement('div');
    ModalDialog.classList.add('modal-dialog');
    ModalDialog.classList.add('modal-dialog-scrollable');
    ModalDialog.style.width = 'calc(100vw - 150px)';
    ModalDialog.style.maxWidth = 'calc(100vw - 150px)';
    ModalDialog.style.height = 'calc(100vh - 199px)';
    ModalDialog.style.top = '60px';
    let ModalContent = document.createElement('div');
    ModalContent.classList.add('modal-content');
    ModalContent.style.minHeight = '100%';
    
    let modalHeader = document.createElement('div');
    modalHeader.classList.add('modal-header');

    let divbreadcrumb = document.createElement('div');
    divbreadcrumb.classList.add('d-flex');
    divbreadcrumb.classList.add('justify-content-between');
    let navbreadcrumb = document.createElement('nav');
    navbreadcrumb.setAttribute('aria-label', 'breadcrumb');
    let olbreadcrumb = document.createElement('ol');
    olbreadcrumb.classList.add('breadcrumb');
    let libreadcrumbProject = document.createElement('li');
    libreadcrumbProject.classList.add('breadcrumb-item');
    let abreadcrumbProject = document.createElement('a');
    abreadcrumbProject.href = "#";
    abreadcrumbProject.innerText = 'Projects';
    libreadcrumbProject.appendChild(abreadcrumbProject);
    olbreadcrumb.appendChild(libreadcrumbProject);
    let libreadcrumbIssue = document.createElement('li');
    libreadcrumbIssue.classList.add('breadcrumb-item');
    libreadcrumbIssue.innerText = _ProjectName;
    olbreadcrumb.appendChild(libreadcrumbIssue);
    navbreadcrumb.appendChild(olbreadcrumb);
    divbreadcrumb.appendChild(navbreadcrumb);
    modalHeader.appendChild(divbreadcrumb);
    let buttonClose = CreadeDiv(['btn-close'],'button');    
    buttonClose.type = 'button';
    buttonClose.setAttribute('data-bs-dismiss', 'modal');
    buttonClose.setAttribute('aria-label', 'Close');
    modalHeader.appendChild(buttonClose);
    ModalContent.appendChild(modalHeader);
    ModalDialog.appendChild(ModalContent);

    let ModalBody = CreadeDiv(['modal-body']); 
    

    let ModalBodyContainer = CreadeDiv(['container']);     
    let ModalBodyContainerRow = CreadeDiv(['row']);
    let ModalBodyContainerColHead = CreadeDiv(['col-12']);
    ModalBodyContainerRow.appendChild(ModalBodyContainerColHead);
    let ModalBodyContainerColHeadRow = CreadeDiv(['row']);
    ModalBodyContainerColHead.appendChild(ModalBodyContainerColHeadRow);
    let ModalBodyContainerColHeadRowCol = CreadeDiv(['col-12']);
    ModalBodyContainerColHeadRow.appendChild(ModalBodyContainerColHeadRowCol);
    let HName = CreadeDiv(null, 'h2', 'IssueName');
    HName.innerText = 'IssueName';
    ModalBodyContainerColHeadRowCol.appendChild(HName);

    let DetailsDiv = CreadeDiv(['col-6']);
    let DescDiv = CreadeDiv(['mb-3']);
    let DescLabel = CreadeDiv(['form-label'], 'label');
    DescLabel.setAttribute('for', 'Description');
    DescLabel.innerText = 'Description';
    
    let DescText = CreadeDiv(['form-control'], 'textarea','Description');
    DescText.rows = 3;    
    DescDiv.appendChild(DescLabel);
    DescDiv.appendChild(DescText);
    DetailsDiv.appendChild(DescDiv);

    let AttachmentsDiv = CreadeDiv(['mb-3'], null, 'IssueAttachemtsArea');
    let AttachmentsLabel = CreadeDiv(['form-label'], 'label');
    AttachmentsLabel.innerText = 'Attachments';
    let FilesDiv = CreadeDiv(['card-group'], null, 'AttachmentsFiles');
    AttachmentsDiv.appendChild(AttachmentsLabel);
    AttachmentsDiv.appendChild(FilesDiv);
    DetailsDiv.appendChild(AttachmentsDiv);

    let DropFilesDiv = CreadeDiv(['card', 'border-5'], null, 'IssueAttachemtsAreaBorder');
    let DropFilesSpan = CreadeDiv(null, 'span');
    DropFilesSpan.innerText = 'Перетащите сюда файлы для вложения или';
    let DropDopFilesDiv = CreadeDiv(['card-body']);
    let aFilesDiv = CreadeDiv(['alert-link'], 'a');
    aFilesDiv.innerText = 'нажмите для выбора';
    DropDopFilesDiv.appendChild(DropFilesSpan);
    DropDopFilesDiv.appendChild(aFilesDiv);
    DropFilesDiv.appendChild(DropDopFilesDiv);
    AttachmentsDiv.appendChild(DropFilesDiv);
    DetailsDiv.appendChild(AttachmentsDiv);

    let ActivityDiv = CreadeDiv(['mb-3']);
    let ActivityH = CreadeDiv(['form-label'], 'h2');
    ActivityDiv.appendChild(ActivityH);
    DetailsDiv.appendChild(ActivityDiv);

    let HRDiv = CreadeDiv(['mb-3']);
    HRDiv.appendChild(CreadeDiv(null, 'hr'));
    DetailsDiv.appendChild(HRDiv);
    ModalBodyContainerRow.appendChild(DetailsDiv);

    let TablistDiv = CreadeDiv(['mb-3']);
    let TablistUl = CreadeDiv(['nav', 'nav-tabs'], 'ul', 'myTab');
    TablistUl.setAttribute('role', 'tablist');
    let TablistLi1 = CreadeDiv(['nav-item'], 'li');
    TablistLi1.setAttribute('role', 'presentation');
    let TablistBtn1 = CreadeDiv(['nav-link', 'active'], 'button', 'Commetns-tab');
    TablistBtn1.setAttribute('data-bs-toggle', 'tab');
    TablistBtn1.setAttribute('data-bs-target', '#Commetns');
    TablistBtn1.setAttribute('type', 'button');
    TablistBtn1.setAttribute('role', 'tab');
    TablistBtn1.setAttribute('aria-selected', 'true');
    TablistBtn1.setAttribute('aria-controls', 'Commetns');
    TablistBtn1.innerText = 'Commetns';
    TablistLi1.appendChild(TablistBtn1);

    let TablistLi2 = CreadeDiv(['nav-item'], 'li');
    TablistLi2.setAttribute('role', 'presentation');
    let TablistBtn2 = CreadeDiv(['nav-link', 'active'], 'button', 'History-tab');
    TablistBtn2.setAttribute('data-bs-toggle', 'tab');
    TablistBtn2.setAttribute('data-bs-target', '#History');
    TablistBtn2.setAttribute('type', 'button');
    TablistBtn2.setAttribute('role', 'tab');
    TablistBtn2.setAttribute('aria-selected', 'true');
    TablistBtn2.setAttribute('aria-controls', 'History');
    TablistBtn2.innerText = 'History';
    TablistLi2.appendChild(TablistBtn2);

    TablistUl.appendChild(TablistLi1)
    TablistUl.appendChild(TablistLi2);

    TablistDiv.appendChild(TablistUl);

    let TabContentDiv = CreadeDiv(['tab-content'], 'div', 'myTabContent');
    let TabPane = CreadeDiv(['tab-pane', 'fade', 'show', 'active'], 'div', 'Commetns');
    TabPane.setAttribute('role', 'tab');
    
    TabPane.setAttribute('aria-labelledby', 'Commetns-tab');
    let CommetnsDiv = CreadeDiv(null, 'div', 'IssueComments');
    TabPane.appendChild(CommetnsDiv);

    let AddCommetnsLabel = CreadeDiv(['form-label'], 'label');
    AddCommetnsLabel.innerText = 'Add Comment';

    let AddCommetnsText = CreadeDiv(['form-control'], 'textarea', 'CommentBody');
    AddCommetnsText.setAttribute('type', 'text');
    AddCommetnsText.setAttribute('rows', '3');
    let br = CreadeDiv(null, 'br');
    let CancelCommentBtn = CreadeDiv(['btn', 'btn-secondary'], 'button');
    CancelCommentBtn.setAttribute('type', 'button');
    CancelCommentBtn.setAttribute('data-bs-dismiss', 'modal');
    CancelCommentBtn.innerText = 'Cancel';

    let SaveCommentBtn = CreadeDiv(['btn', 'btn-primary'], 'button');
    SaveCommentBtn.setAttribute('type', 'button');    
    SaveCommentBtn.innerText = 'Save';

    TabPane.appendChild(AddCommetnsLabel);
    TabPane.appendChild(AddCommetnsText);
    TabPane.appendChild(br);
    TabPane.appendChild(CancelCommentBtn);
    TabPane.appendChild(SaveCommentBtn);
    TabContentDiv.appendChild(TabPane);

    let TabPaneHistory = CreadeDiv(['tab-pane', 'fade'], 'div', 'History');
    TabContentDiv.appendChild(TabPaneHistory);

    TablistDiv.appendChild(TabContentDiv);

    DetailsDiv.appendChild(TablistDiv);

    let FieldsDiv = CreadeDiv(['col-6']);
    let StateDiv = CreadeDiv(['mb-3','w-25']);

    let StateLabel = CreadeDiv(['form-label'], 'label');
    StateLabel.innerText = 'Issue state';

    let StateSelect = CreadeDiv(['form-select'], 'select', 'IssueState2');
    StateDiv.appendChild(StateLabel);
    StateDiv.appendChild(StateSelect);
    FieldsDiv.appendChild(StateDiv);

    let FieldsAccordionDiv = CreadeDiv(['accordion']);
    let FieldsAccordionItemDiv = CreadeDiv(['accordion-item']);
    let FieldsAccordionItemH2 = CreadeDiv(['accordion-header'], 'h2', 'panelsStayOpen-headingOne');
    let FieldsAccordionItemHBtn = CreadeDiv(['accordion-button'], 'button');
    FieldsAccordionItemHBtn.setAttribute('type', 'button');
    FieldsAccordionItemHBtn.setAttribute('data-bs-toggle', 'collapse');
    FieldsAccordionItemHBtn.setAttribute('data-bs-target', '#panelsStayOpen-collapseOne');
    FieldsAccordionItemHBtn.setAttribute('aria-expanded', 'true');
    FieldsAccordionItemHBtn.setAttribute('aria-controls', 'panelsStayOpen-collapseOne');
    FieldsAccordionItemHBtn.innerText = 'Details';
    FieldsAccordionItemH2.appendChild(FieldsAccordionItemHBtn);
    FieldsAccordionItemDiv.appendChild(FieldsAccordionItemH2);

    let FieldsAccordionHeadDiv = CreadeDiv(['accordion-collapse', 'collapse', 'show']);
    FieldsAccordionHeadDiv.setAttribute('aria-labelledby', 'panelsStayOpen-headingOne');
    let FieldsAccordionBodyDiv = CreadeDiv(['accordion-body']);
    let FieldsAccordionIssueFiledsDiv = CreadeDiv(null, 'div', 'IssueFields');
    FieldsAccordionBodyDiv.appendChild(FieldsAccordionIssueFiledsDiv);
    FieldsAccordionHeadDiv.appendChild(FieldsAccordionBodyDiv);    
    FieldsAccordionItemDiv.appendChild(FieldsAccordionHeadDiv);
    FieldsAccordionDiv.appendChild(FieldsAccordionItemDiv);
    FieldsDiv.appendChild(FieldsAccordionDiv);

    ModalBodyContainerRow.appendChild(FieldsDiv);

    ModalBodyContainer.appendChild(ModalBodyContainerRow);
    ModalBody.appendChild(ModalBodyContainer);
    ModalContent.appendChild(ModalBody);

    let ModalFooterDiv = CreadeDiv(['modal-footer']);
    ModalContent.appendChild(ModalFooterDiv);
    ModalDialog.appendChild(ModalContent);

    return ModalDialog;

}

function CreadeDiv(classList,tag,id) {
    let div;
    if(tag == null)
        div = document.createElement('div');
    else
        div = document.createElement(tag);
    if (classList != null)
        for (let i = 0; i < classList.length; i++) {
            div.classList.add(classList[i]);
        }
    if (id != null) {
        div.id = id;
    }
    return div;
    
}