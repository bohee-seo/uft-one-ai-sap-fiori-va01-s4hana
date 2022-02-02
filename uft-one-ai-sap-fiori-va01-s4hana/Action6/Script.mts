Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application

AIUtil("plus").Click
AIUtil.Table.Cell(0, 0).Click
set objSendKey=CreateObject("WScript.shell")
objSendKey.SendKeys "+{TAB}"
objSendKey.SendKeys DataTable.Value("Item", "05_va01_order_details")
objSendKey.SendKeys "{TAB}"
objSendKey.SendKeys DataTable.Value("Material", "05_va01_order_details")
objSendKey.SendKeys "{TAB}"
objSendKey.SendKeys "{TAB}"
objSendKey.SendKeys DataTable.Value("OrderQuantity", "05_va01_order_details")
objSendKey.SendKeys "{TAB}"
objSendKey.SendKeys DataTable.Value("UnitOfMeasure", "05_va01_order_details")
objSendKey.SendKeys "{F11}"
AIUtil.FindText("has been saved").CheckExists TRUE
AIUtil.SetContext Browser("creationtime:=0")
AIUtil("check_box", micAnyText, micWithAnchorOnRight, AIUtil("button", "Save")).CheckExists True
StatusBarText = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil("check_box", micAnyText, micWithAnchorOnRight, AIUtil("button", "Save"))).GetText
StatusBarArray = Split(StatusBarText," ")
msgbox "The Order number is " & StatusBarArray(2)


