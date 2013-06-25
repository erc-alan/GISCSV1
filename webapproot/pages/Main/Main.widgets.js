Main.widgets = {
	varTemplateLogout: ["wm.LogoutVariable", {}, {}, {
		input: ["wm.ServiceInput", {"type":"logoutInputs"}, {}]
	}],
	GISLiveVar: ["wm.LiveVariable", {"inFlightBehavior":"executeLast","maxResults":5000,"type":"com.crcptestdb.data.Gyosha"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.crcptestdb.data.Gyosha","view":[{"caption":"GyoshaCd","sortable":true,"dataIndex":"gyoshaCd","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
	}],
	gyoshaLiveVariable1: ["wm.LiveVariable", {"type":"com.crcptestdb.data.Gyosha"}, {}, {
		liveView: ["wm.LiveView", {"dataType":"com.crcptestdb.data.Gyosha","view":[{"caption":"GyoshaCd","sortable":true,"dataIndex":"gyoshaCd","type":"java.lang.String","displayType":"Text","required":true,"readonly":true,"includeLists":true,"includeForms":true,"order":0,"subType":null},{"caption":"Address","sortable":true,"dataIndex":"address","type":"java.lang.String","displayType":"Text","required":true,"readonly":false,"includeLists":true,"includeForms":true,"order":1,"subType":null}]}, {}]
	}],
	gyoshaDialog: ["wm.DesignableDialog", {"height":"134px","title":"gyosha","width":"500px","containerWidgetId":"containerWidget","buttonBarId":"buttonBar"}, {}, {
		containerWidget: ["wm.Container", {"_classes":{"domNode":["wmdialogcontainer","MainContent"]},"autoScroll":true,"height":"100%","horizontalAlign":"left","padding":"5","verticalAlign":"top","width":"100%"}, {}, {
			gyoshaLiveForm1: ["wm.LiveForm", {"alwaysPopulateEditors":true,"fitToContentHeight":true,"height":"62px","horizontalAlign":"left","liveEditing":false,"margin":"4","verticalAlign":"top"}, {"onSuccess":"gyoshaLivePanel1.popupLiveFormSuccess"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"expression":undefined,"source":"gyoshaDojoGrid.selectedItem","targetProperty":"dataSet"}, {}]
				}],
				gyoshaCdEditor1: ["wm.Text", {"caption":"GyoshaCd","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"gyoshaCd","height":"26px","required":true,"width":"100%"}, {}],
				addressEditor1: ["wm.Text", {"caption":"Address","captionSize":"140px","changeOnKey":true,"dataValue":"","emptyValue":"emptyString","formField":"address","height":"26px","required":true,"width":"100%"}, {}]
			}]
		}],
		buttonBar: ["wm.Panel", {"_classes":{"domNode":["dialogfooter"]},"border":"1,0,0,0","borderColor":"#959DAB","desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
			gyoshaSaveButton: ["wm.Button", {"caption":"Save","height":"100%","margin":"4"}, {"onclick":"gyoshaLiveForm1.saveDataIfValid"}, {
				binding: ["wm.Binding", {}, {}, {
					wire: ["wm.Wire", {"source":"gyoshaLiveForm1.invalid","targetId":null,"targetProperty":"disabled"}, {}]
				}]
			}],
			gyoshaCancelButton: ["wm.Button", {"caption":"Cancel","height":"100%","margin":"4"}, {"onclick":"gyoshaDialog.hide","onclick1":"gyoshaLiveForm1.cancelEdit"}]
		}]
	}],
	layoutBox1: ["wm.Layout", {"horizontalAlign":"center","layoutKind":"left-to-right","verticalAlign":"top"}, {}, {
		panel3: ["wm.Panel", {"height":"100%","horizontalAlign":"left","minHeight":600,"minWidth":900,"verticalAlign":"top","width":"75%"}, {}, {
			panel1: ["wm.HeaderContentPanel", {"border":"0,0,1,0","height":"65px","horizontalAlign":"left","layoutKind":"left-to-right","padding":"0,10","verticalAlign":"middle","width":"100%"}, {}, {
				picture1: ["wm.Picture", {"height":"50px","source":"lib/wm/base/widget/themes/default/images/wmLogo.png","width":"62px"}, {}],
				label3: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_20px","wm_FontSizePx_24px"]},"caption":"[Application Name]","height":"35px","padding":"4","width":"100%"}, {}],
				panel5: ["wm.Panel", {"height":"100%","horizontalAlign":"right","verticalAlign":"middle","width":"100%"}, {}, {
					dojoMenu1: ["wm.DojoMenu", {"fullStructure":[{"label":"Help"},{"label":"About"},{"label":"Logout","onClick":"varTemplateLogout"}],"height":"24px","localizationStructure":{},"transparent":true,"width":"250px"}, {}]
				}]
			}],
			panel2: ["wm.MainContentPanel", {"height":"100%","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				tabLayers1: ["wm.TabLayers", {}, {}, {
					layer1: ["wm.Layer", {"border":"2","caption":"Tab 1","horizontalAlign":"left","padding":"10","verticalAlign":"top"}, {}, {
						gyoshaLivePanel1: ["wm.LivePanel", {"autoScroll":false,"horizontalAlign":"left","verticalAlign":"top"}, {}, {
							binding: ["wm.Binding", {}, {}, {
								wire: ["wm.Wire", {"source":"gyoshaDialog","targetId":null,"targetProperty":"dialog"}, {}],
								wire1: ["wm.Wire", {"source":"gyoshaLiveForm1","targetId":null,"targetProperty":"liveForm"}, {}],
								wire2: ["wm.Wire", {"source":"gyoshaDojoGrid","targetId":null,"targetProperty":"dataGrid"}, {}],
								wire3: ["wm.Wire", {"source":"gyoshaSaveButton","targetId":null,"targetProperty":"saveButton"}, {}]
							}],
							gyoshaDojoGrid: ["wm.DojoGrid", {"columns":[{"show":true,"field":"gyoshaCd","title":"業者コード","width":"167px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":true,"field":"address","title":"住所","width":"249px","align":"left","formatFunc":"","editorProps":{"restrictValues":true},"mobileColumn":false},{"show":false,"field":"PHONE COLUMN","title":"-","width":"100%","align":"left","expression":"\"<div class='MobileRowTitle'>業者コード: \" + ${gyoshaCd} + \"</div>\"\n+ \"<div class='MobileRow'>住所: \" + ${address} + \"</div>\"\n+ \"<div class='MobileRow'>緯度: \" + ${緯度} + \"</div>\"\n+ \"<div class='MobileRow'>経度: \" + ${経度} + \"</div>\"\n","mobileColumn":true},{"show":true,"field":"緯度","title":"緯度","width":"100%","align":"left","editorProps":{"restrictValues":true},"isCustomField":true},{"show":true,"field":"経度","title":"経度","width":"100%","align":"left","editorProps":{"restrictValues":true},"isCustomField":true}],"dsType":"com.crcptestdb.data.Gyosha","height":"193px","margin":"4"}, {"onCellDblClick":"gyoshaLivePanel1.popupLivePanelEdit"}, {
								binding: ["wm.Binding", {}, {}, {
									wire: ["wm.Wire", {"expression":undefined,"source":"gyoshaLiveVariable1","targetProperty":"dataSet"}, {}]
								}]
							}],
							gyoshaGridButtonPanel: ["wm.Panel", {"desktopHeight":"32px","enableTouchHeight":true,"height":"32px","horizontalAlign":"right","layoutKind":"left-to-right","mobileHeight":"40px","verticalAlign":"top","width":"100%"}, {}, {
								button1: ["wm.Button", {"caption":"CSVとしてダウンロード","margin":"4","width":"286px"}, {"onclick":"button1Click"}],
								gyoshaNewButton: ["wm.Button", {"caption":"新規","margin":"4"}, {"onclick":"gyoshaLivePanel1.popupLivePanelInsert"}],
								gyoshaUpdateButton: ["wm.Button", {"caption":"編集","margin":"4"}, {"onclick":"gyoshaLivePanel1.popupLivePanelEdit"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"gyoshaDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}],
								gyoshaDeleteButton: ["wm.Button", {"caption":"削除","margin":"4"}, {"onclick":"gyoshaLiveForm1.deleteData"}, {
									binding: ["wm.Binding", {}, {}, {
										wire: ["wm.Wire", {"source":"gyoshaDojoGrid.emptySelection","targetId":null,"targetProperty":"disabled"}, {}]
									}]
								}]
							}]
						}]
					}],
					layer2: ["wm.Layer", {"border":"2","caption":"Tab 2","horizontalAlign":"left","verticalAlign":"top"}, {}],
					layer3: ["wm.Layer", {"border":"2","caption":"Tab 3","horizontalAlign":"left","verticalAlign":"top"}, {}]
				}]
			}],
			panel6: ["wm.HeaderContentPanel", {"height":"24px","horizontalAlign":"left","layoutKind":"left-to-right","verticalAlign":"top","width":"100%"}, {}, {
				picture2: ["wm.Picture", {"height":"100%","source":"lib/wm/base/widget/themes/default/images/wmSmallLogo.png","width":"24px"}, {}],
				label2: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"caption":"Powered by WaveMaker","height":"100%","padding":"4"}, {}],
				label1: ["wm.Label", {"_classes":{"domNode":["wm_FontSizePx_10px"]},"align":"right","caption":"Copyright 2012 [company name]","height":"100%","padding":"4","width":"100%"}, {}]
			}]
		}]
	}]
}