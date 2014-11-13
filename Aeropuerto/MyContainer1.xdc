{
    "xdsVersion": "3.1.0",
    "frameworkVersion": "touch20",
    "internals": {
        "type": "Ext.Container",
        "reference": {
            "name": "items",
            "type": "array"
        },
        "codeClass": null,
        "userConfig": {
            "designer|initialView": true,
            "designer|userAlias": "Master",
            "designer|userClassName": "Master",
            "layout": "hbox"
        },
        "cn": [
            {
                "type": "Ext.Container",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "hidden": true,
                    "id": "navigation",
                    "layout": "card",
                    "width": "250px",
                    "zIndex": null
                },
                "name": "MyContainer",
                "cn": [
                    {
                        "type": "Ext.Toolbar",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "docked": "top",
                            "title": "Navigation",
                            "width": null
                        },
                        "name": "MyToolbar2"
                    },
                    {
                        "type": "Ext.Container",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "html": "<p>Navigation Item</p>",
                            "id": "navigation-content",
                            "padding": "0.5em",
                            "scrollable": "vertical"
                        },
                        "name": "MyContainer5"
                    }
                ]
            },
            {
                "type": "Ext.Container",
                "reference": {
                    "name": "items",
                    "type": "array"
                },
                "codeClass": null,
                "userConfig": {
                    "cls": [
                        "slide"
                    ],
                    "height": "100%",
                    "id": "main",
                    "layout": "card",
                    "layout|flex": 1,
                    "left": 0,
                    "width": "100%",
                    "zIndex": 5
                },
                "name": "MyContainer6",
                "cn": [
                    {
                        "type": "Ext.Toolbar",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "docked": "top",
                            "id": "main-toolbar",
                            "title": "Main",
                            "ui": "light"
                        },
                        "name": "MyToolbar3",
                        "cn": [
                            {
                                "type": "Ext.Button",
                                "reference": {
                                    "name": "items",
                                    "type": "array"
                                },
                                "codeClass": null,
                                "userConfig": {
                                    "itemId": "mybutton",
                                    "text": "Open"
                                },
                                "name": "MyButton1",
                                "cn": [
                                    {
                                        "type": "basiceventbinding",
                                        "reference": {
                                            "name": "listeners",
                                            "type": "array"
                                        },
                                        "codeClass": null,
                                        "userConfig": {
                                            "fn": "onMybuttonTap",
                                            "implHandler": [
                                                "",
                                                "",
                                                "if (Ext.getCmp('navigation').isHidden()) {",
                                                "    Ext.getCmp('navigation').show();   ",
                                                "}",
                                                "",
                                                "",
                                                "var main = Ext.get('main');",
                                                "",
                                                "",
                                                "if (main.hasCls('out')) {",
                                                "    main.removeCls('out');",
                                                "    main.addCls('in'); ",
                                                "    button.setText('Open');",
                                                "} else {",
                                                "    main.removeCls('in');    ",
                                                "    main.addCls('out');    ",
                                                "    button.setText('Close');         ",
                                                "}"
                                            ],
                                            "name": "tap"
                                        },
                                        "name": "onMybuttonTap"
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        "type": "Ext.Container",
                        "reference": {
                            "name": "items",
                            "type": "array"
                        },
                        "codeClass": null,
                        "userConfig": {
                            "html": "<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vitae sagittis ipsum. Nam eros orci, iaculis a cursus eget, eleifend id sapien. In hac habitasse platea dictumst. Aliquam sagittis adipiscing aliquet. Etiam nec mi nisi, vel convallis nisi. Nunc congue ultrices risus, at rutrum est aliquet in. Pellentesque purus eros, scelerisque vehicula porttitor vel, facilisis at mi. Quisque vestibulum, neque vitae mattis dignissim, dui nisi lacinia quam, et faucibus elit lacus eu massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam porttitor, elit ac luctus dignissim, justo massa eleifend metus, id consequat est diam a lorem. Maecenas et viverra dolor. Proin sed eros id arcu vehicula tincidunt eu a diam. Donec eu quam ut velit iaculis aliquam sed a neque. Sed vel sapien dui, vel tristique nulla. Maecenas a lectus urna.  Quisque porta rutrum posuere. Vestibulum fermentum convallis erat, vel eleifend nisl viverra sed. Duis orci nulla, vestibulum vitae euismod vitae, sodales id turpis. In lobortis scelerisque lacinia. Quisque ac nulla ultricies diam accumsan tempus. Morbi non odio mi. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur pellentesque accumsan sem, non porttitor ipsum rutrum eu. Vivamus vel metus metus. Mauris mollis ullamcorper porttitor. Vestibulum egestas eleifend augue posuere adipiscing. Aenean tempor tempus eros, mollis feugiat est cursus mattis.</p>",
                            "id": "item-example",
                            "padding": "0.5em",
                            "scrollable": true
                        },
                        "name": "MyContainer7"
                    }
                ]
            }
        ]
    },
    "linkedNodes": {},
    "boundStores": {},
    "boundModels": {}
}