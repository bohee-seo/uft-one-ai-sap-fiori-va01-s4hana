Set AppContext=Browser("CreationTime:=0")												'Set the variable for what application (in this case the browser) we are acting upon
AIUtil.SetContext AppContext																'Tell the AI engine to point at the application

AIUtil.FindTextBlock("Exit").Click
wait (3)
AIUtil.FindTextBlock("Apps").Exist
AIUtil("left_triangle").Click
