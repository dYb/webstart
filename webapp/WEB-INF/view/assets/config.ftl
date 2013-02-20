<#--
	全局设置
-->

<#if !DEBUG??>
	<#global DEBUG = false />
</#if>

<#global APP_URL    = "http://localhost:3000" />
<#global CSS_PATH   = APP_URL + "/css" />
<#global JS_PATH    = APP_URL + "/js" />
<#global JS_MODULES = APP_URL + "/js/modules" />
<#global IMG_PATH   = APP_URL + "/img" />

<#global APP_TITLE  = "畅游乐园" />


<#global SITE_STATE>
	<!-- Site Stat -->
	<div style="display:;">
	<script src="http://s4.cnzz.com/stat.php?id=4802554&web_id=4802554" language="JavaScript"></script>
	</div>
</#global>