Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application

AIUtil("text_box", "Cust. Reference:").Type "450000019998"
AIUtil("text_box", "Cust. Ref. Date:").Type FormatDateTime(Date, 2)
AIUtil("text_box", "Ship-To Party:").Type "EWM17-CU02"
AIUtil("text_box", "Sold-To Party:").Type "EWM17-CU02"

