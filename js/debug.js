var Debug = new DebugClass();
function DebugClass()
    {
        this.GetIssue = function () {
            return {
                "AttachedFiles":
                    [
                        {
                            "Id":"b9b4a87d45b041b488dad31c0962ba7b",
                            "Name":"2.PNG",
                            "Path":"ftp://192.168.2.133/nm/2.PNGeb9346c372294a3e8f99111971c5c18c",
                            "Type":"image/png",
                            "CreateDate":"2022-11-16T15:08:22.035151Z",
                            "Size":0,
                            "DeleteDate":"9999-12-31T23:59:59.9999999"
                        },
                        {
                            "Id":"6959df9093f44ede9c02e79e489eb661",
                            "Name":"4.PNG",
                            "Path":"ftp://192.168.2.133/nm/4.PNGf7413659ca7140b6afe4dfe3550feac6",
                            "Type":"image/png","CreateDate":"2022-11-16T15:08:39.320792Z",
                            "Size":0,"DeleteDate":"9999-12-31T23:59:59.9999999"
                        },
                        {
                            "Id":"84e3fe19a88e477783d2d770fd963c1c",
                            "Name":"Good.PNG",
                            "Path":"ftp://192.168.2.133/nm/Good.PNGb86a1304393e4aef938e070021ed577c",
                            "Type":"image/png",
                            "CreateDate":"2022-11-16T16:43:24.780162Z",
                            "Size":0,
                            "DeleteDate":"9999-12-31T23:59:59.9999999"
                        },
                        {
                            "Id":"71f2b61b292c4583b246735b90c5c553",
                            "Name":"Снимок.PNG",
                            "Path":"ftp://192.168.2.133/nm/Снимок.PNG8ddab360eb7c4d9ba9b7f757c5a987fe",
                            "Type":"image/png",
                            "CreateDate":"2022-11-16T16:43:40.817545Z",
                            "Size":0,"DeleteDate":"9999-12-31T23:59:59.9999999"
                        },
                        {
                            "Id":"8ab8dda1173e4c6c880338f8aadd4186",
                            "Name":"wait.PNG",
                            "Path":"ftp://192.168.2.133/nm/wait.PNGcbfd4352e46741f98af3e0e8a7d545a2",
                            "Type":"image/png",
                            "CreateDate":"2022-11-16T16:43:44.22061Z",
                            "Size":0,"DeleteDate":"9999-12-31T23:59:59.9999999"
                        }
                        ,
                        {
                            "Id":"3099d2fd638d42e5bc1d4b1b8d7afb50",
                            "Name":"qweqwe.PNG",
                            "Path":"ftp://192.168.2.133/nm/qweqwe.PNG7afad44c64b34e0289aa321a9833c79a",
                            "Type":"image/png",
                            "CreateDate":"2022-11-16T16:43:48.632547Z",
                            "Size":0,"DeleteDate":"9999-12-31T23:59:59.9999999"
                        },
                        {
                            "Id":"ea0268c11b424a5ca38559ea88a993cf",
                            "Name":"download.jpg",
                            "Path":"ftp://192.168.2.133/nm/download.jpgec09c1da6889491893f7c5d7cfc7f925",
                            "Type":"image/jpeg",
                            "CreateDate":"2022-11-16T16:43:50.907039Z",
                            "Size":0,
                            "DeleteDate":"9999-12-31T23:59:59.9999999"
                        }
                    ],
                "Id":"cb241cd4de604eef937d6e2d042235a1",
                "Key":"test-7",
                "ProjectId":"dce1274e436a4217928d0bf1ef7048d2",
                "ProjectName":"Projcet test 2",
                "Status":"20f0b82d46294c358da17c4e46ce169d",
                "Type":"cdc0258dd0db49298ec7b6d09763fc75",
                "AuthorId":"123231",
                "AuthorName":"123231 Name",
                "Files":
                    [
                        "b9b4a87d45b041b488dad31c0962ba7b",
                        "6959df9093f44ede9c02e79e489eb661",
                        "84e3fe19a88e477783d2d770fd963c1c",
                        "71f2b61b292c4583b246735b90c5c553",
                        "8ab8dda1173e4c6c880338f8aadd4186",
                        "3099d2fd638d42e5bc1d4b1b8d7afb50",
                        "ea0268c11b424a5ca38559ea88a993cf"
                    ],
                "Created":"2022-11-10T00:00:00",
                "Updated":"2022-11-16T16:43:51.023251",
                "DeadTime":"2022-11-10T00:00:00",
                "ExtraData":[
                    {
                        "Id":"0580996d1bda4736a0dbbd45eaee8d29",
                        "FieldId":"2222",
                        "Name":"Summary",
                        "Value":"TO DO Issue"
                    },
                    {
                        "Id":"be2ab4636c79463d83fd0b68c4b60d64",
                        "FieldId":"4444",
                        "Name":"Description",
                        "Value":"TO DO Issue Description"
                    },
                    {
                        "Id":"46719cb0e8c44a42acdbf0d07ce9e073",
                        "FieldId":"null",
                        "Name":"Assignee",
                        "Value":"ME"
                    }
                ]
            }
        }
        this.GetWorkflow = function () {
            return {
                Id:'1',
                Name:'Workflow 1',
                Statuses:[
                    {
                        Id:'1',
                        Name:'1 TO DO 1',
                        Type:1
                    },
                    {
                        Id:'2',
                        Name:'2 TO DO 2',
                        Type:1
                    },
                    {
                        Id:'3',
                        Name:'3 TO DO 3',
                        Type:2
                    },
                    {
                        Id:'4',
                        Name:'4 TO DO 4',
                        Type:2
                    },
                    {
                        Id:'5',
                        Name:'5 TO DO 5',
                        Type:3
                    }
                ],
                Transitions:[
                    {
                        Id:'1',
                        Name:'Transitions 1',
                        To:'1',
                        Type:0
                    },
                    {
                        Id:'2',
                        Name:'Transitions 2',
                        To:'2',
                        Type:0
                    },
                    {
                        Id:'3',
                        Name:'Transitions 3',
                        To:'3',
                        Type:0
                    },
                    {
                        Id:'4',
                        Name:'Transitions 4',
                        To:'4',
                        Type:0
                    },
                    {
                        Id:'5',
                        Name:'Transitions 5',
                        To:'5',
                        Type:0
                    },
                    {
                        Id:'6',
                        Name:'Transitions 6',
                        To:'2',
                        Type:1,
                        From:['1']
                    }
                ]
            }
        }
    }