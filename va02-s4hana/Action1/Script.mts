﻿AIUtil.SetContext Browser("creationtime:=0")


For xxx = 1 To 10 Step 1 ' this is my favorite way to wait for a long time
	if AIUtil("search").Exist (xxx) then ' not that i wait for the loop index, so I wait longer every time through the loop
		Exit for
	end if
Next

AIUtil("search").Search "va02" ' note - this does not seem to work with IE, but does indeed work fine with Chrome
If AIUtil.FindTextBlock("Apps").Exist (120) then ' you have to sync on the Apps text in the left pane - not on the actual Create Sales Order
		'using .exist insteach of checkExists so that I can specify a wait larger than the global timeout value
End If
AIUtil.FindTextBlock("VA02").Click

Order_number=Parameter("Order_number")
Sales_org=Parameter("Sales_org")


AIUtil("search", micAnyText, micFromTop, 2).Click
'AIUtil("text_box", "").Type Sales_org
AIUtil.FindTextBlock("Find").Click

AIUtil("check_mark").Click
AIUtil("search", micAnyText, micFromBottom, 1).Click
AIUtil("button", "Save").Click
AIUtil("left_triangle").Click
wait (2)
AIUtil("left_triangle").Click
wait(2)
AIUtil("left_triangle").Click
