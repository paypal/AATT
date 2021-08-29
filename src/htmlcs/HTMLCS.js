/*! html_codesniffer - v2.5.1 - 2021-08-29 */
/**
 * +--------------------------------------------------------------------+
 * | This HTML_CodeSniffer file is Copyright (c)                        |
 * | Squiz Pty Ltd (ABN 77 084 670 600)                                 |
 * +--------------------------------------------------------------------+
 * | IMPORTANT: Your use of this Software is subject to the terms of    |
 * | the Licence provided in the file licence.txt. If you cannot find   |
 * | this file please contact Squiz (www.squiz.com.au) so we may        |
 * | provide you a copy.                                                |
 * +--------------------------------------------------------------------+
 *
 */
(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define('htmlcs', factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        var exports = factory();
        for (var prop in exports) {
            root[prop] = exports[prop];
        }
    }
}(this, function () {
    var _global = {
        translation: {}
    };

_global.translation["cn"] = {
    auditor_name: "HTML_CodeSniffer",
    auditor_using_standard: "使用标准",
    auditor_standards: "标准",
    auditor_code_snippet: "代码片断",
    auditor_close: "关闭",
    auditor_select_types: "选择要包含在报告中的问题类型",
    auditor_home: "首页",
    auditor_view_report: "查看报告",
    auditor_report: "报告",
    auditor_back_to_report: "回到报告",
    auditor_previous_issue: "上一个问题",
    auditor_next_issue: "下一个问题",
    auditor_issue: "问题",
    auditor_of: "总共",
    auditor_errors: "错误",
    auditor_error: "错误",
    auditor_warnings: "警告",
    auditor_warning: "警告",
    auditor_notices: "提醒",
    auditor_notice: "提醒",
    auditor_toggle_display_of: "切换显示",
    auditor_messages: "消息",
    auditor_unable_to_point: "无法通过这个问题指向关联的元素。",
    auditor_unable_to_point_entire: "无法指向这个问题，因为它与整个文档有关。",
    auditor_unable_to_point_removed: "无法指向这个元素，因为自报告生成以来它已经从文档中被移除了。",
    auditor_unable_to_point_outside: "无法指向这个元素，因为它位于文档的body元素外。",
    auditor_unable_to_point_hidden: "无法指向这个元素，因为它已经从视图中隐藏，或它没有一个视觉表现。",
    auditor_point_to_element: "指向这个元素",
    auditor_unsupported_browser: "这个代码片断功能在这个浏览器中已经不被支持",
    auditor_page: "页",
    auditor_updated_to: "HTML_CodeSniffer 已更新到版本",
    auditor_view_the_changelog: "查看更新日志",
    auditor_success_criterion: "成功标准",
    auditor_suggested_techniques: "建议技巧",
    auditor_applies_entire_document: "应用于全部文档",
    "1_1_1_H30.2": "Img 元素是链接的唯一内容，但是缺少了 alt 文本，alt 文本应该描述链接的用途",
    "1_1_1_H67.1": "alt 文本为空的 Img 元素必须具有缺席或空 title 属性",
    "1_1_1_H67.2": "标记Img元素，使其被辅助技术忽略.",
    "1_1_1_H37": "缺少alt属性的Img元素。使用alt属性指定一个短的替代文本",
    "1_1_1_G94.Image": "确保img元素的alt文本具有与图像相同的用途和显示相同的信息。",
    "1_1_1_H36": "图像提交按钮缺少alt属性。使用alt属性指定描述按钮函数的文本替代方案。",
    "1_1_1_G94.Button": "确保图像提交按钮的alt文本标识按钮的用途。",
    "1_1_1_H24": "图像映射中缺少alt属性的Area元素。每个area元素必须有一个描述图像映射区域功能的文本选项。",
    "1_1_1_H24.2": "确保area元素的文本替代与它引用的图像映射图像部分的用途相同。",
    "1_1_1_G73,G74": "如果无法在短文本替代中完整描述此图像，请确保也提供长文本替代，例如在正文文本中或通过链接。",
    "1_1_1_H2.EG5": "链接内的Img元素不能使用与链接的文本内容重复的alt文本。",
    "1_1_1_H2.EG4": "当链接旁边的链接包含链接文本时，链接内的Img元素的alt文本为空或缺失。考虑合并这些链接。",
    "1_1_1_H2.EG3": "链接内的Img元素不能使用与旁边的文本链接内容重复的alt文本。",
    "1_1_1_H53,ARIA6": "对象元素必须在耗尽所有其他替代后包含文本替代。",
    "1_1_1_G94,G92.Object,ARIA6": "检查是否可以为具有相同目的和显示相同信息的非文本内容提供短文本(如果合适，也可以是长文本)替代方案。",
    "1_1_1_H35.3": "对于不支持Applet元素的浏览器，Applet元素必须在元素的主体中包含一个文本替代。",
    "1_1_1_H35.2": "Applet元素必须包含alt属性，以便为支持该元素但无法加载Applet的浏览器提供文本替代。",
    "1_1_1_G94,G92.Applet": "检查是否可以为具有相同目的和显示相同信息的非文本内容提供短文本(如果合适，也可以是长文本)替代方案。",
    "1_2_1_G158": "如果此嵌入式对象仅包含预录制的音频，且不作为文本内容的替代提供，请检查是否提供了替代文本版本。",
    "1_2_1_G159,G166": "如果此嵌入式对象仅包含预录制的视频，且不作为文本内容的替代提供，则请检查是否提供了替代文本版本，或提供了表示等效信息的音轨。",
    "1_2_2_G87,G93": "如果此嵌入式对象包含预录制的同步媒体，且未作为文本内容的替代提供，请检查是否为音频内容提供了标题。",
    "1_2_3_G69,G78,G173,G8": "如果这个嵌入的对象包含预先录制的同步媒体，并且没有作为文本内容的替代提供，请检查是否提供了视频的音频描述和/或内容的替代文本版本。",
    "1_2_4_G9,G87,G93": "如果此嵌入式对象包含同步媒体，请检查是否为实时音频内容提供标题。",
    "1_2_5_G78,G173,G8": "如果此嵌入式对象包含预录制的同步媒体，请检查是否为其视频内容提供了音频描述。",
    "1_2_6_G54,G81": "如果此嵌入式对象包含预录制的同步媒体，请检查是否为其音频提供了手语解释。",
    "1_2_7_G8": "如果这个嵌入的对象包含同步媒体，并且前台音频中的暂停不足以让音频描述传递预录制视频的感觉，那么请检查是否提供了扩展的音频描述，无论是通过脚本还是其他版本。",
    "1_2_8_G69,G159": "如果这个嵌入的对象包含预先录制的同步媒体或视频内容，请检查是否提供了内容的另一个文本版本。",
    "1_2_9_G150,G151,G157": "如果这个嵌入的对象包含实时音频内容，请检查是否提供了内容的另一个文本版本。",
    "1_3_1_F92,ARIA4": "此元素的角色是“表示”，但包含具有语义意义的子元素。",
    "1_3_1_H44.NonExistent": "此标签的“for”属性包含文档中不存在的ID。",
    "1_3_1_H44.NonExistentFragment": "此标签的“for”属性包含文档片段中不存在的ID。",
    "1_3_1_H44.NotFormControl": '这个label的 "for"属性包含一个非表单控件元素的ID。确保您为预期的元素输入了正确的ID。',
    "1_3_1_H65": "此表单控件的“title”属性为空或仅包含空格。为了标签测试的目的，它将被忽略。",
    "1_3_1_ARIA6": "此表单控件具有“aria-label”属性，该属性为空或仅包含空格。为了标签测试的目的，它将被忽略。",
    "1_3_1_ARIA16,ARIA9": '此表单控件包含一个aria-labelledby属性, 但是它包含一个ID"{{id}}" 它不存在于元素中。出于标签测试的目的，aria-labelledby属性将被忽略。',
    "1_3_1_F68.Hidden": "这个隐藏的表单字段以某种方式进行了标记。不需要为隐藏的表单字段添加标签。",
    "1_3_1_F68.HiddenAttr": "这个表单字段打算隐藏(使用“hidden”属性)，但也以某种方式标记。不需要为隐藏的表单字段添加标签。",
    "1_3_1_F68": "这个表单字段应该以某种方式进行标记。使用label元素(带有“for”属性或围绕表单字段)，或者适当使用“title”、“aria-label”或“aria-labelledby”属性。",
    "1_3_1_H49.": "在HTML5中使用的表示标记已经过时。",
    "1_3_1_H49.AlignAttr": "对齐属性。",
    "1_3_1_H49.Semantic": "语义标记应该用于标记强调的或特殊的文本，以便通过编程确定文本。",
    "1_3_1_H49.AlignAttr.Semantic": "语义标记应该用于标记强调的或特殊的文本，以便通过编程确定文本。",
    "1_3_1_H42": "如果要将此内容用作标题，则应使用标题标记。",
    "1_3_1_H63.3": "表单元格的作用域属性无效。有效值是row、col、rowgroup或colgroup。",
    "1_3_1_H63.2": "td元素上作为其他元素标题的作用域属性在HTML5中已经过时了。使用th元素代替。",
    "1_3_1_H43.ScopeAmbiguous": "元素的作用域属性在具有多级标题的表中是不明确的。在td元素上使用headers属性。",
    "1_3_1_H43.IncorrectAttr": "此td元素上不正确的headers属性。期望的“{{expected}}”，但发现“{{actual}}”",
    "1_3_1_H43.IncorrectAttrNotice": "Check that headers attribute on td element is correct.",
    "1_3_1_H43.HeadersRequired": "td元素与其关联的th元素之间的关系没有定义。由于该表有多个层次的th元素，因此必须在td元素上使用headers属性。",
    "1_3_1_H43.MissingHeaderIds": "并非该表中的所有th元素都包含id属性。这些单元格应该包含id，以便td元素的header属性可以引用它们。",
    "1_3_1_H43.MissingHeadersAttrs": "并非此表中的所有td元素都包含header属性。每个headers属性应该列出与该单元格关联的所有th元素的id。",
    "1_3_1_H43,H63": "td元素与其关联的th元素之间的关系没有定义。要么在th元素上使用scope属性，要么在td元素上使用headers属性。",
    "1_3_1_H63.1": "并非该表中的所有th元素都具有范围属性。这些单元格应该包含一个范围属性来标识它们与td元素的关联。",
    "1_3_1_H73.3.LayoutTable": "此表似乎用于布局，但包含摘要属性。布局表不能包含摘要属性，如果提供，则必须为空。",
    "1_3_1_H39,H73.4": "如果此表是一个数据表，并且同时具有summary属性和标题元素，则该摘要不应复制标题。",
    "1_3_1_H73.3.Check": "如果该表是一个数据表，请检查summary属性是否描述了该表的组织或解释了如何使用该表。",
    "1_3_1_H73.3.NoSummary": "如果这个表是一个数据表，可以考虑使用table元素的summary属性来概述这个表。",
    "1_3_1_H39.3.LayoutTable": "此表似乎用于布局，但包含标题元素。布局表不能包含标题。",
    "1_3_1_H39.3.Check": "如果这个表是一个数据表，请检查标题元素是否准确地描述了这个表。",
    "1_3_1_H39.3.NoCaption": "如果这个表是一个数据表，可以考虑使用表元素的标题元素来标识这个表。",
    "1_3_1_H71.NoLegend": "Fieldset不包含传奇元素。所有字段集都应该包含一个描述字段组描述的legend元素。",
    "1_3_1_H85.2": "如果此选择列表包含相关选项组，则应将其与optgroup分组。",
    "1_3_1_H71.SameName": "如果这些单选按钮或复选框需要进一步的组级描述，则它们应该包含在fieldset元素中。",
    "1_3_1_H48.1": "这个内容看起来像是使用纯文本模拟一个无序列表。如果是这样，用ul元素标记此内容将向文档添加适当的结构信息。",
    "1_3_1_H48.2": "这个内容看起来像是使用纯文本模拟有序列表。如果是这样，用ol元素标记此内容将向文档添加适当的结构信息。",
    "1_3_1_G141_a": "标题结构没有逻辑嵌套。这个h{{headingNum}}元素似乎是主要的文档标题，因此应该是h1元素。",
    "1_3_1_G141_b": "标题结构没有逻辑嵌套。这个h{{headingNum}}元素应该是一个正确嵌套的h{{properHeadingNum}}。",
    "1_3_1_H42.2": "没有内容的标题标签。不打算作为标题的文本不应该用标题标记。",
    "1_3_1_H48": "如果此元素包含导航部分，建议将其标记为列表。",
    "1_3_1_LayoutTable": "此表似乎是一个布局表。如果要将其改为数据表，请确保使用th元素标识头单元格。",
    "1_3_1_DataTable": "这个表似乎是一个数据表。如果要将其改为布局表，请确保没有th元素，没有摘要或标题。",
    "1_3_2_G57": "当线性化时，检查内容是否按有意义的顺序排列，例如禁用样式表时。",
    "1_3_3_G96": "在提供理解内容的指令时，不要仅依赖感官特征(如形状、大小或位置)来描述对象。",
    "1_4_1_G14,G18": "检查仅使用颜色传达的任何信息在文本或其他视觉线索中是否可用。",
    "1_4_2_F23": "如果此元素包含自动播放超过3秒的音频，请检查是否具有暂停、停止或静音音频的功能。",
    "1_4_3_F24.BGColour": "检查此元素是否具有继承的前景颜色，以补充相应的内联背景颜色或图像。",
    "1_4_3_F24.FGColour": "检查此元素是否具有继承的背景颜色或图像，以补充相应的内联前景颜色。",
    "1_4_3_G18_or_G145.Abs": "此元素绝对定位，无法确定背景颜色。确保文本与背景中所有被覆盖部分的对比度至少为{{required}}:1。",
    "1_4_3_G18_or_G145.BgImage": "这个元素的文本被放置在背景图像上。确保文本与图像所有覆盖部分的对比度至少为{{required}}:1。",
    "1_4_3_G18_or_G145.Alpha": "此元素的文本或背景包含透明度。确保文本和背景之间的对比度至少为{{required}}:1。",
    "1_4_3_G18_or_G145.Fail": "此元素在此一致性级别上的对比度不足。期望的对比度比至少为{{required}}:1，但是该元素中的文本的对比度比为{{value}}:1。",
    "1_4_3_G18_or_G145.Fail.Recomendation": "建议:改变",
    "1_4_3_G18_or_G145.Fail.Recomendation.Text": "文本颜色",
    "1_4_3_G18_or_G145.Fail.Recomendation.Background": "背景",
    "1_4_4_G142": "检查文本可以在不使用辅助技术的情况下调整大小，最高可达200%，而不会丢失内容或功能。",
    "1_4_5_G140,C22,C30.AALevel": "如果所使用的技术可以达到视觉呈现的效果，请检查文字是用来传达信息而不是文字的图像，除非文字的图像对所传达的信息是必不可少的，或者可以根据用户的需求进行视觉定制。",
    "1_4_6_G18_or_G17.Abs": "此元素绝对定位，无法确定背景颜色。确保文本与背景中所有被覆盖部分的对比度至少为{{required}}:1。",
    "1_4_6_G18_or_G17.BgImage": "这个元素的文本被放置在背景图像上。确保文本与图像所有覆盖部分的对比度至少为{{required}}:1。",
    "1_4_6_G18_or_G17.Fail": "此元素在此一致性级别上的对比度不足。期望的对比度比至少为{{required}}:1，但是该元素中的文本的对比度比为{{value}}:1。",
    "1_4_6_G18_or_G17.Fail.Recomendation": "建议:改变",
    "1_4_6_G18_or_G17.Fail.Recomendation.Text": "文本颜色",
    "1_4_6_G18_or_G17.Fail.Recomendation.Background": "背景",
    "1_4_7_G56": "对于这个元素中主要是语音(如旁白)的预先录制的纯音频内容，任何背景声音都应该是可哑的，或者至少比语音低20分贝(或大约4倍)。",
    "1_4_8_G148,G156,G175": "检查是否有一种机制可供用户通过Web页面或浏览器为文本块选择前景和背景颜色。",
    "1_4_8_H87,C20": "检查是否存在一种机制，将文本块的宽度减少到不超过80个字符(或中文、日文或韩文的40个字符)。",
    "1_4_8_C19,G172,G169": "检查文本块是否完全对齐——也就是说，在左边缘和右边缘——或者存在一种删除完全对齐的机制。",
    "1_4_8_G188,C21": "检查文本块中的行间距在段落中至少为150%，段落间距至少为行间距的1.5倍，或者有实现这一点的机制。",
    "1_4_8_H87,G146,C26": "检查文本是否可以在不使用辅助技术的情况下调整大小至200%，而不需要用户在全屏窗口上水平滚动。",
    "1_4_9_G140,C22,C30.NoException": "检查文本的图像是否仅用于纯装饰，或者文本的特定表示对于所传递的信息是必不可少的。",
    "2_1_1_G90": "确保事件处理程序为此元素提供的功能可通过键盘获得",
    "2_1_1_SCR20.DblClick": "确保通过键盘双击此元素提供的功能可用。",
    "2_1_1_SCR20.MouseOver": "确保通过键盘在此元素上单击所提供的功能可用;例如，使用焦点事件。",
    "2_1_1_SCR20.MouseOut": "确保鼠标移出此元素所提供的功能可通过键盘获得;例如，使用blur事件。",
    "2_1_1_SCR20.MouseMove": "确保通过键盘移动此元素上的鼠标所提供的功能可用。",
    "2_1_1_SCR20.MouseDown": "确保通过键盘在此元素上按下鼠标所提供的功能可用;例如，使用keydown事件。",
    "2_1_1_SCR20.MouseUp": "确保通过键盘在此元素上单击鼠标所提供的功能可用;例如，使用keyup事件。",
    "2_1_2_F10": "检查这个applet或插件是否能够在使用键盘时将焦点从自身移开。",
    "2_2_1_F40.2": "元刷新标记用于重定向到另一个页面，时间限制不为零。用户无法控制这个时间限制。",
    "2_2_1_F41.2": "用于刷新当前页面的元刷新标记。用户无法控制此刷新的时间限制。",
    "2_2_2_SCR33,SCR22,G187,G152,G186,G191": "如果内容的任何部分移动、滚动或闪烁超过5秒，或自动更新，请检查是否有可用的机制来暂停、停止或隐藏内容。",
    "2_2_2_F4": "确保有一种机制可以在5秒内停止这个闪烁元素。",
    "2_2_2_F47": "Blink元素不能满足眨眼信息在5秒内停止的要求。",
    "2_2_3_G5": "除了非交互式同步媒体和实时事件外，检查时间不是事件或活动的重要组成部分。",
    "2_2_4_SCR14": "检查所有中断(包括对内容的更新)都可以被用户延迟或抑制，紧急情况除外。",
    "2_2_5_G105,G181": "如果此Web页面是具有非活动时间限制的一组Web页面的一部分，请检查经过身份验证的用户在重新进行身份验证后是否可以继续该活动而不会丢失数据。",
    "2_3_1_G19,G176": "检查内容的任何组件在任何1秒周期内闪烁的次数都不超过3次，或者任何闪烁区域的大小都不够小。",
    "2_3_2_G19": "检查内容的任何组件在任何1秒内闪烁的次数都不超过3次。",
    "2_4_1_H64.1": "Iframe元素需要一个非空的title属性来标识框架。",
    "2_4_1_H64.2": "检查此元素的title属性是否包含标识框架的文本。",
    "2_4_1_G1,G123,G124,H69": "确保可以绕过任何通用导航元素;例如，通过使用跳过链接、头元素或ARIA地标角色。",
    "2_4_1_G1,G123,G124.NoSuchID": "这个链接指向文档中一个名为“{{id}}”的锚，但是不存在同名的锚。",
    "2_4_1_G1,G123,G124.NoSuchIDFragment": "这个链接指向文档中一个名为“{{id}}”的锚，但是在测试的片段中不存在同名的锚。",
    "2_4_2_H25.1.NoHeadEl": "没有标题部分可以放置描述性标题元素。",
    "2_4_2_H25.1.NoTitleEl": "应该使用head部分中的非空title元素为文档提供标题。",
    "2_4_2_H25.1.EmptyTitle": "标题部分中的title元素应该是非空的。",
    "2_4_2_H25.2": "检查title元素是否描述了文档。",
    "2_4_3_H4.2": "如果使用tabindex，请检查tabindex属性指定的选项卡顺序是否遵循内容中的关系。",
    "2_4_4_H77,H78,H79,H80,H81,H33": "检查链接文本与以编程方式确定的链接上下文或其title属性相结合，以确定链接的用途。",
    "2_4_4_H77,H78,H79,H80,H81": "检查链接文本与以编程方式确定的链接上下文的组合是否标识了链接的用途。",
    "2_4_5_G125,G64,G63,G161,G126,G185": "如果此Web页面不是线性流程的一部分，请检查在一组Web页面中定位此Web页面的方法是否不止一种。",
    "2_4_6_G130,G131": "检查标题和标签是否描述了主题或目的。",
    "2_4_7_G149,G165,G195,C15,SCR31": "检查至少有一种操作模式，可以将键盘焦点指示器可视地定位在用户界面控件上。",
    "2_4_8_H59.1": "链接元素只能位于文档的头部部分。",
    "2_4_8_H59.2a": "Link元素缺少标识链接类型的非空rel属性。",
    "2_4_8_H59.2b": "Link元素缺少一个指向被链接资源的非空href属性。",
    "2_4_9_H30": "检查链接的文本是否描述了链接的目的。",
    "3_1_1_H57.2": "html元素应该具有描述文档语言的lang或xml:lang属性。",
    "3_1_1_H57.3.Lang": "文档元素的lang属性中指定的语言似乎不是格式良好的。",
    "3_1_1_H57.3.XmlLang": "文档元素的xml:lang属性中指定的语言似乎不是格式良好的。",
    "3_1_2_H58": "确保在适当的情况下，使用元素上的lang和/或xml:lang属性标记语言中的任何更改。",
    "3_1_2_H58.1.Lang": "此元素的lang属性中指定的语言似乎不是格式良好的。",
    "3_1_2_H58.1.XmlLang": "此元素的xml:lang属性中指定的语言似乎不是格式良好的。",
    "3_1_3_H40,H54,H60,G62,G70": "检查是否有一种机制可用于识别以不寻常或受限方式使用的单词或短语的特定定义，包括习语和行话。",
    "3_1_4_G102,G55,G62,H28,G97": "检查是否有识别缩写的展开形式或含义的机制。",
    "3_1_5_G86,G103,G79,G153,G160": "如果内容要求阅读能力高于初中教育水平，则应提供补充内容或替代版本。",
    "3_1_6_H62.1.HTML5": "Ruby元素不包含rt元素，rt元素包含其正文的发音信息。",
    "3_1_6_H62.1.XHTML11": "Ruby元素不包含rt元素，rt元素包含rb元素内文本的发音信息。",
    "3_1_6_H62.2": "Ruby元素不包含rp元素，rp元素为不支持Ruby文本的浏览器提供额外的标点符号。",
    "3_2_1_G107": "检查当这个输入字段接收到焦点时，没有发生上下文更改。",
    "3_2_2_H32.2": "此表单不包含提交按钮，这将为无法使用键盘提交表单的用户带来问题。提交按钮是类型属性为“Submit”或“image”的输入元素，或类型为“Submit”或省略/无效的按钮元素。",
    "3_2_3_G61": "检查在多个Web页面上重复的导航机制在每次重复时都以相同的相对顺序出现，除非用户发起了更改。",
    "3_2_4_G197": "检查在此Web页面中具有相同功能的组件是否在其所属的Web页面集中一致地标识。",
    "3_2_5_H83.3": "检查此链接的链接文本是否包含指示该链接将在新窗口中打开的信息。",
    "3_3_1_G83,G84,G85": "如果在此表单中自动检测到输入错误，请检查错误项是否已标识，并以文本形式向用户描述错误。",
    "3_3_2_G131,G89,G184,H90": "检查此表单中是否为用户输入提供了描述性标签或说明(包括所需字段)。",
    "3_3_3_G177": "请检查此表单是否提供了对用户输入错误的建议更正，除非它会危及内容的安全性或用途。",
    "3_3_4_G98,G99,G155,G164,G168.LegalForms": "如果此表单将用户绑定到财务或法律承诺、修改/删除用户可控制的数据或提交测试响应，请确保提交是可逆的、检查输入错误和/或由用户确认的。",
    "3_3_5_G71,G184,G193": "在web页面和/或控件级别检查此表单是否提供上下文敏感的帮助。",
    "3_3_6_G98,G99,G155,G164,G168.AllForms": "请检查提交到此表单的内容是否可逆，是否有输入错误，以及/或是否得到用户的确认。",
    "4_1_1_F77": "在网页上找到重复的id属性值“{{id}}”。",
    "4_1_2_H91.A.Empty": "锚元素，具有ID，但没有href或链接文本。考虑将其ID移动到父元素或附近的元素。",
    "4_1_2_H91.A.EmptyWithName": "锚元素，具有名称属性，但没有href或链接文本。考虑将name属性移动为父元素或附近元素的ID。",
    "4_1_2_H91.A.EmptyNoId": "没有链接内容、没有名称和/或ID属性的锚元素。",
    "4_1_2_H91.A.NoHref": "锚元素不应用于定义页内链接目标。如果不将ID用于其他目的(如CSS或脚本)，可以考虑将其移动到父元素。",
    "4_1_2_H91.A.Placeholder": "找到带有链接内容的锚元素，但未提供href、ID或name属性。",
    "4_1_2_H91.A.NoContent": "找到具有有效href属性的锚元素，但未提供链接内容。",
    "4_1_2_input_element": "输入元素",
    "4_1_2_role_of_button": "元素的作用是“按钮”，但是",
    "4_1_2_element_content": "元素内容",
    "4_1_2_element": "元素",
    "4_1_2_msg_pattern": "这个{{msgNodeType}}没有可访问性API可用的名称。有效的名称是:{{builtAttrs}}。",
    "4_1_2_msg_pattern2": "这个{{msgNodeType}}没有可访问性API可用的值。",
    "4_1_2_msg_add_one": "通过向元素添加内容来添加一个。",
    "4_1_2_msg_pattern3": "这个{{msgNodeType}}没有初始选择的选项。根据HTML版本的不同，公开给可访问性API的值可能是未定义的。",
    "4_1_2_value_exposed_using_attribute": "使用{{requiredValue}}属性公开一个值。",
    "4_1_2_value_exposed_using_element": "使用{{requiredValue}}元素公开一个值。"
};

_global.translation["en"] = {
    auditor_name: "HTML_CodeSniffer by Squiz",
    auditor_using_standard: "Using standard",
    auditor_standards: "Standards",
    auditor_code_snippet: "Code Snippet",
    auditor_close: "Close",
    auditor_select_types: "Select the types of issues to include in the report",
    auditor_home: "Home",
    auditor_view_report: "View Report",
    auditor_report: "Report",
    auditor_back_to_report: "Back to Report",
    auditor_previous_issue: "Previous Issue",
    auditor_next_issue: "Next Issue",
    auditor_issue: "Issue",
    auditor_of: "of",
    auditor_errors: "Errors",
    auditor_error: "Error",
    auditor_warnings: "Warnings",
    auditor_warning: "Warning",
    auditor_notices: "Notices",
    auditor_notice: "Notice",
    auditor_toggle_display_of: "Toggle display of",
    auditor_messages: "messages",
    auditor_unable_to_point: "Unable to point to the element associated with this issue.",
    auditor_unable_to_point_entire: "Unable to point to this issue, as it relates to the entire document.",
    auditor_unable_to_point_removed: "Unable to point to this element as it has been removed from the document since the report was generated.",
    auditor_unable_to_point_outside: "Unable to point to this element because it is located outside the document's body element.",
    auditor_unable_to_point_hidden: "Unable to point to this element because it is hidden from view, or does not have a visual representation.",
    auditor_point_to_element: "Point to Element",
    auditor_unsupported_browser: "The code snippet functionality is not supported in this browser.",
    auditor_page: "Page",
    auditor_updated_to: "HTML_CodeSniffer has been updated to version",
    auditor_view_the_changelog: "View the changelog",
    auditor_success_criterion: "Success Criterion",
    auditor_suggested_techniques: "Suggested Techniques",
    auditor_applies_entire_document: "This applies to the entire document",
    "1_1_1_H30.2": "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    "1_1_1_H67.1": "Img element with empty alt text must have absent or empty title attribute.",
    "1_1_1_H67.2": "Img element is marked so that it is ignored by Assistive Technology.",
    "1_1_1_H37": "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    "1_1_1_G94.Image": "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    "1_1_1_H36": "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    "1_1_1_G94.Button": "Ensure that the image submit button's alt text identifies the purpose of the button.",
    "1_1_1_H24": "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    "1_1_1_H24.2": "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    "1_1_1_G73,G74": "If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.",
    "1_1_1_H2.EG5": "Img element inside a link must not use alt text that duplicates the text content of the link.",
    "1_1_1_H2.EG4": "Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.",
    "1_1_1_H2.EG3": "Img element inside a link must not use alt text that duplicates the content of a text link beside it.",
    "1_1_1_H53,ARIA6": "Object elements must contain a text alternative after all other alternatives are exhausted.",
    "1_1_1_G94,G92.Object,ARIA6": "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    "1_1_1_H35.3": "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    "1_1_1_H35.2": "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    "1_1_1_G94,G92.Applet": "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    "1_2_1_G158": "If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.",
    "1_2_1_G159,G166": "If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.",
    "1_2_2_G87,G93": "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that captions are provided for audio content.",
    "1_2_3_G69,G78,G173,G8": "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that an audio description of its video, and/or an alternative text version of the content is provided.",
    "1_2_4_G9,G87,G93": "If this embedded object contains synchronised media, check that captions are provided for live audio content.",
    "1_2_5_G78,G173,G8": "If this embedded object contains pre-recorded synchronised media, check that an audio description is provided for its video content.",
    "1_2_6_G54,G81": "If this embedded object contains pre-recorded synchronised media, check that a sign language interpretation is provided for its audio.",
    "1_2_7_G8": "If this embedded object contains synchronised media, and where pauses in foreground audio is not sufficient to allow audio descriptions to convey the sense of pre-recorded video, check that an extended audio description is provided, either through scripting or an alternate version.",
    "1_2_8_G69,G159": "If this embedded object contains pre-recorded synchronised media or video-only content, check that an alternative text version of the content is provided.",
    "1_2_9_G150,G151,G157": "If this embedded object contains live audio-only content, check that an alternative text version of the content is provided.",
    "1_3_1_F92,ARIA4": 'This element\'s role is "presentation" but contains child elements with semantic meaning.',
    "1_3_1_H44.NonExistent": 'This label\'s "for" attribute contains an ID that does not exist in the document.',
    "1_3_1_H44.NonExistentFragment": 'This label\'s "for" attribute contains an ID that does not exist in the document fragment.',
    "1_3_1_H44.NotFormControl": 'This label\'s "for" attribute contains an ID for an element that is not a form control. Ensure that you have entered the correct ID for the intended element.',
    "1_3_1_H65": 'This form control has a "title" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
    "1_3_1_ARIA6": 'This form control has an "aria-label" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
    "1_3_1_ARIA16,ARIA9": 'This form control contains an aria-labelledby attribute, however it includes an ID "{{id}}" that does not exist on an element. The aria-labelledby attribute will be ignored for labelling test purposes.',
    "1_3_1_F68.Hidden": "This hidden form field is labelled in some way. There should be no need to label a hidden form field.",
    "1_3_1_F68.HiddenAttr": 'This form field is intended to be hidden (using the "hidden" attribute), but is also labelled in some way. There should be no need to label a hidden form field.',
    "1_3_1_F68": 'This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.',
    "1_3_1_H49.": "Presentational markup used that has become obsolete in HTML5.",
    "1_3_1_H49.AlignAttr": "Align attributes.",
    "1_3_1_H49.Semantic": "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.",
    "1_3_1_H49.AlignAttr.Semantic": "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.",
    "1_3_1_H42": "Heading markup should be used if this content is intended as a heading.",
    "1_3_1_H63.3": "Table cell has an invalid scope attribute. Valid values are row, col, rowgroup, or colgroup.",
    "1_3_1_H63.2": "Scope attributes on td elements that act as headings for other elements are obsolete in HTML5. Use a th element instead.",
    "1_3_1_H43.ScopeAmbiguous": "Scope attributes on th elements are ambiguous in a table with multiple levels of headings. Use the headers attribute on td elements instead.",
    "1_3_1_H43.IncorrectAttr": 'Incorrect headers attribute on this td element. Expected "{{expected}}" but found "{{actual}}"',
    "1_3_1_H43.IncorrectAttrNotice": "Check that headers attribute on td elements are correct.",
    "1_3_1_H43.HeadersRequired": "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    "1_3_1_H43.MissingHeaderIds": "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    "1_3_1_H43.MissingHeadersAttrs": "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    "1_3_1_H43,H63": "The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.",
    "1_3_1_H63.1": "Not all th elements in this table have a scope attribute. These cells should contain a scope attribute to identify their association with td elements.",
    "1_3_1_H73.3.LayoutTable": "This table appears to be used for layout, but contains a summary attribute. Layout tables must not contain summary attributes, or if supplied, must be empty.",
    "1_3_1_H39,H73.4": "If this table is a data table, and both a summary attribute and a caption element are present, the summary should not duplicate the caption.",
    "1_3_1_H73.3.Check": "If this table is a data table, check that the summary attribute describes the table's organization or explains how to use the table.",
    "1_3_1_H73.3.NoSummary": "If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.",
    "1_3_1_H39.3.LayoutTable": "This table appears to be used for layout, but contains a caption element. Layout tables must not contain captions.",
    "1_3_1_H39.3.Check": "If this table is a data table, check that the caption element accurately describes this table.",
    "1_3_1_H39.3.NoCaption": "If this table is a data table, consider using a caption element to the table element to identify this table.",
    "1_3_1_H71.NoLegend": "Fieldset does not contain a legend element. All fieldsets should contain a legend element that describes a description of the field group.",
    "1_3_1_H85.2": "If this selection list contains groups of related options, they should be grouped with optgroup.",
    "1_3_1_H71.SameName": "If these radio buttons or check boxes require a further group-level description, they should be contained within a fieldset element.",
    "1_3_1_H48.1": "This content looks like it is simulating an unordered list using plain text. If so, marking up this content with a ul element would add proper structure information to the document.",
    "1_3_1_H48.2": "This content looks like it is simulating an ordered list using plain text. If so, marking up this content with an ol element would add proper structure information to the document.",
    "1_3_1_G141_a": "The heading structure is not logically nested. This h{{headingNum}} element appears to be the primary document heading, so should be an h1 element.",
    "1_3_1_G141_b": "The heading structure is not logically nested. This h{{headingNum}} element should be an h{{properHeadingNum}} to be properly nested.",
    "1_3_1_H42.2": "Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.",
    "1_3_1_H48": "If this element contains a navigation section, it is recommended that it be marked up as a list.",
    "1_3_1_LayoutTable": "This table appears to be a layout table. If it is meant to instead be a data table, ensure header cells are identified using th elements.",
    "1_3_1_DataTable": "This table appears to be a data table. If it is meant to instead be a layout table, ensure there are no th elements, and no summary or caption.",
    "1_3_2_G57": "Check that the content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    "1_3_3_G96": "Where instructions are provided for understanding the content, do not rely on sensory characteristics alone (such as shape, size or location) to describe objects.",
    "1_3_4.RestrictView": "Check that content does not restrict its view and operation to a single display orientation, such as portrait or landscape, unless a specific display orientation is essential.",
    "1_3_5_H98.FaultyValue": "This element contains a potentially faulty value in its autocomplete attribute: {{valuesStr}}.",
    "1_3_5_H98.InvalidAutoComplete_Text": "Invalid autocomplete value: {{x}}. Element does not belong to Text control group.",
    "1_3_5_H98.InvalidAutoComplete_Multiline": "Invalid autocomplete value: {{x}}. Element does not belong to Multiline control group.",
    "1_3_5_H98.InvalidAutoComplete_Password": "Invalid autocomplete value: {{x}}. Element does not belong to Password control group.",
    "1_3_5_H98.InvalidAutoComplete_Url": "Invalid autocomplete value: {{x}}. Element does not belong to Url control group.",
    "1_3_5_H98.InvalidAutoComplete_Telephone": "Invalid autocomplete value: {{x}}. Element does not belong to Telephone control group.",
    "1_3_5_H98.InvalidAutoComplete_Numeric": "Invalid autocomplete value: {{x}}. Element does not belong to Numeric control group.",
    "1_3_5_H98.InvalidAutoComplete_Month": "Invalid autocomplete value: {{x}}. Element does not belong to Month control group.",
    "1_3_5_H98.InvalidAutoComplete_Date": "Invalid autocomplete value: {{x}}. Element does not belong to Date control group.",
    "1_3_5_H98.Purpose": "Check that the input field serves a purpose identified in the Input Purposes for User Interface Components section; and that the content is implemented using technologies with support for identifying the expected meaning for form input data.",
    "1_3_5_H98.MissingAutocomplete": "This element does not have an autocomplete attribute. If this field collects information about the user, consider adding one to comply with this Success Criterion.",
    "1_3_6_ARIA11.Check": "Check that the purpose of User Interface Components, icons, and regions can be programmatically determined.",
    "1_4_1_G14,G18": "Check that any information conveyed using colour alone is also available in text, or through other visual cues.",
    "1_4_2_F23": "If this element contains audio that plays automatically for longer than 3 seconds, check that there is the ability to pause, stop or mute the audio.",
    "1_4_3_F24.BGColour": "Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.",
    "1_4_3_F24.FGColour": "Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.",
    "1_4_3_G18_or_G145.Abs": "This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.",
    "1_4_3_G18_or_G145.BgImage": "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
    "1_4_3_G18_or_G145.Alpha": "This element's text or background contains transparency. Ensure the contrast ratio between the text and background are at least {{required}}:1.",
    "1_4_3_G18_or_G145.Fail": "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.",
    "1_4_3_G18_or_G145.Fail.Recomendation": "Recommendation: ",
    "1_4_3_G18_or_G145.Fail.Recomendation.Text": "change text colour to {{value}}",
    "1_4_3_G18_or_G145.Fail.Recomendation.Background": "change background to {{value}}",
    "1_4_4_G142": "Check that text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
    "1_4_5_G140,C22,C30.AALevel": "If the technologies being used can achieve the visual presentation, check that text is used to convey information rather than images of text, except when the image of text is essential to the information being conveyed, or can be visually customised to the user's requirements.",
    "1_4_6_G18_or_G17.Abs": "This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.",
    "1_4_6_G18_or_G17.BgImage": "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
    "1_4_6_G18_or_G17.Fail": "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.",
    "1_4_6_G18_or_G17.Fail.Recomendation": "Recommendation: ",
    "1_4_6_G18_or_G17.Fail.Recomendation.Text": "change text colour to {{value}}",
    "1_4_6_G18_or_G17.Fail.Recomendation.Background": "change background to {{value}}",
    "1_4_7_G56": "For pre-recorded audio-only content in this element that is primarily speech (such as narration), any background sounds should be muteable, or be at least 20 dB (or about 4 times) quieter than the speech.",
    "1_4_8_G148,G156,G175": "Check that a mechanism is available for the user to select foreground and background colours for blocks of text, either through the Web page or the browser.",
    "1_4_8_H87,C20": "Check that a mechanism exists to reduce the width of a block of text to no more than 80 characters (or 40 in Chinese, Japanese or Korean script).",
    "1_4_8_C19,G172,G169": "Check that blocks of text are not fully justified - that is, to both left and right edges - or a mechanism exists to remove full justification.",
    "1_4_8_G188,C21": "Check that line spacing in blocks of text are at least 150% in paragraphs, and paragraph spacing is at least 1.5 times the line spacing, or that a mechanism is available to achieve this.",
    "1_4_8_H87,G146,C26": "Check that text can be resized without assistive technology up to 200 percent without requiring the user to scroll horizontally on a full-screen window.",
    "1_4_9_G140,C22,C30.NoException": "Check that images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Check": "Check that content can be presented without loss of information or functionality, and without requiring scrolling in two dimensions for:     Vertical scrolling content at a width equivalent to 320 CSS pixels;     Horizontal scrolling content at a height equivalent to 256 CSS pixels;     Except for parts of the content which require two-dimensional layout for usage or meaning.",
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed": 'This element has "position: fixed". This may require scrolling in two dimensions, which is considered a failure of this Success Criterion.',
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling": "Preformatted text may require scrolling in two dimensions, which is considered a failure of this Success Criterion.",
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom": "Interfering with a user agent's ability to zoom may be a failure of this Success Criterion.",
    "1_4_11_G195,G207,G18,G145,G174,F78.Check": "Check that the visual presentation of the following have a contrast ratio of at least 3:1 against adjacent color(s):     User Interface Components: Visual information required to identify user interface components and states, except for inactive components or where the appearance of the component is determined by the user agent and not modified by the author;     Graphical Objects: Parts of graphics required to understand the content, except when a particular presentation of graphics is essential to the information being conveyed.",
    "1_4_12_C36,C35.Check": "Check that no loss of content or functionality occurs by setting all of the following and by changing no other style property:              Line height (line spacing) to at least 1.5 times the font size;         Spacing following paragraphs to at least 2 times the font size;         Letter spacing (tracking) to at least 0.12 times the font size;         Word spacing to at least 0.16 times the font size.",
    "1_4_13_F95.Check": "Check that where receiving and then removing pointer hover or keyboard focus triggers additional content to become visible and then hidden, the following are true:              Dismissable: A mechanism is available to dismiss the additional content without moving pointer hover or keyboard focus, unless the additional content communicates an input error or does not obscure or replace other content;         Hoverable: If pointer hover can trigger the additional content, then the pointer can be moved over the additional content without the additional content disappearing;         Persistent: The additional content remains visible until the hover or focus trigger is removed, the user dismisses it, or its information is no longer valid.",
    "2_1_1_G90": "Ensure the functionality provided by an event handler for this element is available through the keyboard",
    "2_1_1_SCR20.DblClick": "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    "2_1_1_SCR20.MouseOver": "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    "2_1_1_SCR20.MouseOut": "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    "2_1_1_SCR20.MouseMove": "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    "2_1_1_SCR20.MouseDown": "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    "2_1_1_SCR20.MouseUp": "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    "2_1_2_F10": "Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.",
    "2_1_4.Check": "Check that if a keyboard shortcut is implemented in content using only letter (including upper- and lower-case letters), punctuation, number, or symbol characters, then at least one of the following is true:              Turn off: A mechanism is available to turn the shortcut off;         Remap: A mechanism is available to remap the shortcut to use one or more non-printable keyboard characters (e.g. Ctrl, Alt, etc);         Active only on focus: The keyboard shortcut for a user interface component is only active when that component has focus.     ",
    "2_2_1_F40.2": "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    "2_2_1_F41.2": "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    "2_2_2_SCR33,SCR22,G187,G152,G186,G191": "If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.",
    "2_2_2_F4": "Ensure there is a mechanism available to stop this blinking element in less than five seconds.",
    "2_2_2_F47": "Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.",
    "2_2_3_G5": "Check that timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
    "2_2_4_SCR14": "Check that all interruptions (including updates to content) can be postponed or suppressed by the user, except interruptions involving an emergency.",
    "2_2_5_G105,G181": "If this Web page is part of a set of Web pages with an inactivity time limit, check that an authenticated user can continue the activity without loss of data after re-authenticating.",
    "2_2_6.Check": "Check that users are warned of the duration of any user inactivity that could cause data loss, unless the data is preserved for more than 20 hours when the user does not take any actions.",
    "2_3_1_G19,G176": "Check that no component of the content flashes more than three times in any 1-second period, or that the size of any flashing area is sufficiently small.",
    "2_3_2_G19": "Check that no component of the content flashes more than three times in any 1-second period.",
    "2_3_3.Check": "Check that motion animation triggered by interaction can be disabled, unless the animation is essential to the functionality or the information being conveyed.",
    "2_4_1_H64.1": "Iframe element requires a non-empty title attribute that identifies the frame.",
    "2_4_1_H64.2": "Check that the title attribute of this element contains text that identifies the frame.",
    "2_4_1_G1,G123,G124,H69": "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
    "2_4_1_G1,G123,G124.NoSuchID": 'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name.',
    "2_4_1_G1,G123,G124.NoSuchIDFragment": 'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name in the fragment tested.',
    "2_4_2_H25.1.NoHeadEl": "There is no head section in which to place a descriptive title element.",
    "2_4_2_H25.1.NoTitleEl": "A title should be provided for the document, using a non-empty title element in the head section.",
    "2_4_2_H25.1.EmptyTitle": "The title element in the head section should be non-empty.",
    "2_4_2_H25.2": "Check that the title element describes the document.",
    "2_4_3_H4.2": "If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.",
    "2_4_4_H77,H78,H79,H80,H81,H33": "Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.",
    "2_4_4_H77,H78,H79,H80,H81": "Check that the link text combined with programmatically determined link context identifies the purpose of the link.",
    "2_4_5_G125,G64,G63,G161,G126,G185": "If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.",
    "2_4_6_G130,G131": "Check that headings and labels describe topic or purpose.",
    "2_4_7_G149,G165,G195,C15,SCR31": "Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.",
    "2_4_8_H59.1": "Link elements can only be located in the head section of the document.",
    "2_4_8_H59.2a": "Link element is missing a non-empty rel attribute identifying the link type.",
    "2_4_8_H59.2b": "Link element is missing a non-empty href attribute pointing to the resource being linked.",
    "2_4_9_H30": "Check that text of the link describes the purpose of the link.",
    "2_5_1.Check": "Check that all functionality that uses multipoint or path-based gestures for operation can be operated with a single pointer without a path-based gesture, unless a multipoint or path-based gesture is essential.",
    "2_5_2.SinglePointer_Check": "Check that for functionality that can be operated using a single pointer, at least one of the following is true:         No Down-Event: The down-event of the pointer is not used to execute any part of the function;         Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;         Up Reversal: The up-event reverses any outcome of the preceding down-event;         Essential: Completing the function on the down-event is essential.",
    "2_5_2.Mousedown_Check": "This element has an mousedown event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true:         No Down-Event: The down-event of the pointer is not used to execute any part of the function;         Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;         Up Reversal: The up-event reverses any outcome of the preceding down-event;         Essential: Completing the function on the down-event is essential.",
    "2_5_2.Touchstart_Check": "This element has a touchstart event listener. Check that for functionality that can be operated using a single pointer, at least one of the following is true:              No Down-Event: The down-event of the pointer is not used to execute any part of the function;         Abort or Undo: Completion of the function is on the up-event, and a mechanism is available to abort the function before completion or to undo the function after completion;         Up Reversal: The up-event reverses any outcome of the preceding down-event;         Essential: Completing the function on the down-event is essential.",
    "2_5_3_F96.Check": "Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
    "2_5_3_F96.AccessibleName": "Accessible name for this element does not contain the visible label text. Check that for user interface components with labels that include text or images of text, the name contains the text that is presented visually.",
    "2_5_4.Check": "Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:              Supported Interface: The motion is used to operate functionality through an accessibility supported interface;         Essential: The motion is essential for the function and doing so would invalidate the activity.     ",
    "2_5_4.Devicemotion": "This element has a devicemotion event listener. Check that functionality that can be operated by device motion or user motion can also be operated by user interface components and responding to the motion can be disabled to prevent accidental actuation, except when:              Supported Interface: The motion is used to operate functionality through an accessibility supported interface;         Essential: The motion is essential for the function and doing so would invalidate the activity.     ",
    "2_5_5.Check": "Check that the size of the target for pointer inputs is at least 44 by 44 CSS pixels except when:              Equivalent: The target is available through an equivalent link or control on the same page that is at least 44 by 44 CSS pixels;         Inline: The target is in a sentence or block of text;         User Agent Control: The size of the target is determined by the user agent and is not modified by the author;         Essential: A particular presentation of the target is essential to the information being conveyed.     ",
    "2_5_6.Check": "Check that the content does not restrict use of input modalities available on a platform except where the restriction is essential, required to ensure the security of the content, or required to respect user settings.",
    "3_1_1_H57.2": "The html element should have a lang or xml:lang attribute which describes the language of the document.",
    "3_1_1_H57.3.Lang": "The language specified in the lang attribute of the document element does not appear to be well-formed.",
    "3_1_1_H57.3.XmlLang": "The language specified in the xml:lang attribute of the document element does not appear to be well-formed.",
    "3_1_2_H58": "Ensure that any change in language is marked using the lang and/or xml:lang attribute on an element, as appropriate.",
    "3_1_2_H58.1.Lang": "The language specified in the lang attribute of this element does not appear to be well-formed.",
    "3_1_2_H58.1.XmlLang": "The language specified in the xml:lang attribute of this element does not appear to be well-formed.",
    "3_1_3_H40,H54,H60,G62,G70": "Check that there is a mechanism available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
    "3_1_4_G102,G55,G62,H28,G97": "Check that a mechanism for identifying the expanded form or meaning of abbreviations is available.",
    "3_1_5_G86,G103,G79,G153,G160": "Where the content requires reading ability more advanced than the lower secondary education level, supplemental content or an alternative version should be provided.",
    "3_1_6_H62.1.HTML5": "Ruby element does not contain an rt element containing pronunciation information for its body text.",
    "3_1_6_H62.1.XHTML11": "Ruby element does not contain an rt element containing pronunciation information for the text inside the rb element.",
    "3_1_6_H62.2": "Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.",
    "3_2_1_G107": "Check that a change of context does not occur when this input field receives focus.",
    "3_2_2_H32.2": 'This form does not contain a submit button, which creates issues for those who cannot submit the form using the keyboard. Submit buttons are INPUT elements with type attribute "submit" or "image", or BUTTON elements with type "submit" or omitted/invalid.',
    "3_2_3_G61": "Check that navigational mechanisms that are repeated on multiple Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
    "3_2_4_G197": "Check that components that have the same functionality within this Web page are identified consistently in the set of Web pages to which it belongs.",
    "3_2_5_H83.3": "Check that this link's link text contains information indicating that the link will open in a new window.",
    "3_3_1_G83,G84,G85": "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    "3_3_2_G131,G89,G184,H90": "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    "3_3_3_G177": "Check that this form provides suggested corrections to errors in user input, unless it would jeopardize the security or purpose of the content.",
    "3_3_4_G98,G99,G155,G164,G168.LegalForms": "If this form would bind a user to a financial or legal commitment, modify/delete user-controllable data, or submit test responses, ensure that submissions are either reversible, checked for input errors, and/or confirmed by the user.",
    "3_3_5_G71,G184,G193": "Check that context-sensitive help is available for this form, at a Web-page and/or control level.",
    "3_3_6_G98,G99,G155,G164,G168.AllForms": "Check that submissions to this form are either reversible, checked for input errors, and/or confirmed by the user.",
    "4_1_1_F77": 'Duplicate id attribute value "{{id}}" found on the web page.',
    "4_1_2_H91.A.Empty": "Anchor element found with an ID but without a href or link text. Consider moving its ID to a parent or nearby element.",
    "4_1_2_H91.A.EmptyWithName": "Anchor element found with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element.",
    "4_1_2_H91.A.EmptyNoId": "Anchor element found with no link content and no name and/or ID attribute.",
    "4_1_2_H91.A.NoHref": "Anchor elements should not be used for defining in-page link targets. If not using the ID for other purposes (such as CSS or scripting), consider moving it to a parent element.",
    "4_1_2_H91.A.Placeholder": "Anchor element found with link content, but no href, ID or name attribute has been supplied.",
    "4_1_2_H91.A.NoContent": "Anchor element found with a valid href attribute, but no link content has been supplied.",
    "4_1_2_input_element": "input element",
    "4_1_2_element_content": "element content",
    "4_1_2_element": "element",
    "4_1_2_msg_pattern": "This {{msgNodeType}} does not have a name available to an accessibility API. Valid names are: {{builtAttrs}}.",
    "4_1_2_msg_pattern_role_of_button": 'This element has role of "button" but does not have a name available to an accessibility API. Valid names are: {{builtAttrs}}.',
    "4_1_2_msg_pattern2": "This {{msgNodeType}} does not have a value available to an accessibility API.",
    "4_1_2_msg_add_one": "Add one by adding content to the element.",
    "4_1_2_msg_pattern3": "This {{msgNodeType}} does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.",
    "4_1_2_value_exposed_using_attribute": "A value is exposed using the {{requiredValue}} attribute.",
    "4_1_2_value_exposed_using_element": "A value is exposed using the {{requiredValue}} element.",
    "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check": "Check that status messages can be programmatically determined through role or properties such that they can be presented to the user by assistive technologies without receiving focus."
};

_global.translation["fr"] = {
    auditor_name: "HTML_CodeSniffer par Squiz",
    auditor_using_standard: "Utilisation de la norme",
    auditor_standards: "Normes",
    auditor_code_snippet: "Bout de code",
    auditor_close: "Fermer",
    auditor_select_types: "Sélectionner les types de questions à inclure dans le rapport",
    auditor_home: "Accueil",
    auditor_view_report: "Voir le rapport",
    auditor_report: "Rapport",
    auditor_back_to_report: "Retour au rapport",
    auditor_previous_issue: "Problème précédent",
    auditor_next_issue: "Prochain problème",
    auditor_issue: "Problème",
    auditor_of: "de",
    auditor_errors: "Erreurs",
    auditor_error: "Erreur",
    auditor_warnings: "Attentions",
    auditor_warning: "Attention",
    auditor_notices: "Avis",
    auditor_notice: "Avis",
    auditor_toggle_display_of: "Basculer l'affichage de",
    auditor_messages: "messages",
    auditor_unable_to_point: "Impossible de pointer vers l'élément associé à ce problème.",
    auditor_unable_to_point_entire: "Impossible d'attirer l'attention sur cette question, car elle concerne l'ensemble du document.",
    auditor_unable_to_point_removed: "Impossible de pointer vers cet élément car il a été supprimé du document depuis que le rapport a été généré.",
    auditor_unable_to_point_outside: "Impossible de pointer vers cet élément parce qu'il est situé à l'extérieur de l'élément de corps du document.",
    auditor_unable_to_point_hidden: "Impossible de pointer vers cet élément parce qu'il est caché de la vue ou n'a pas de représentation visuelle.",
    auditor_point_to_element: "Pointer vers l'élément",
    auditor_unsupported_browser: "La fonctionnalité d'extrait de code n'est pas prise en charge dans ce navigateur.",
    auditor_page: "Page",
    auditor_updated_to: "HTML_CodeSniffer a été mis à jour en version",
    auditor_view_the_changelog: "Voir le journal des modifications",
    auditor_success_criterion: "Critère de réussite",
    auditor_suggested_techniques: "Techniques suggérées",
    auditor_applies_entire_document: "Ceci s'applique à l'ensemble du document",
    "1_1_1_H30.2": "L'élément Img est le seul contenu du lien, mais il manque le texte alt. Le texte alternatif devrait décrire le but du lien.",
    "1_1_1_H67.1": "L'élément Img avec du texte alt vide doit avoir un attribut de titre absent ou vide.",
    "1_1_1_H67.2": "L'élément Img est marqué de sorte qu'il est ignoré par la technologie d'assistance.",
    "1_1_1_H37": "Élément Img auquel il manque un attribut alt. Utilisez l'attribut alt pour spécifier une alternative de texte court.",
    "1_1_1_G94.Image": "Assurez-vous que le texte alt de l'élément img sert aux mêmes fins et présente les mêmes informations que l'image.",
    "1_1_1_H36": "Le bouton de soumission d'image n'a pas de texte alternatif. Spécifiez une alternative de texte qui décrit la fonction du bouton, en utilisant l'attribut alt.",
    "1_1_1_G94.Button": "Assurez-vous que le texte alt du bouton de soumission d'image identifie le but du bouton.",
    "1_1_1_H24": "Élément de zone dans une carte-image sans attribut alt. Chaque élément de zone doit avoir une alternative textuelle qui décrit la fonction de la zone de la carte image.",
    "1_1_1_H24.2": "Assurez-vous que l'alternative textuelle de l'élément de zone sert le même but que la partie de l'image de la carte-image à laquelle il fait référence.",
    "1_1_1_G73,G74": "Si cette image ne peut être entièrement décrite dans un texte court, assurez-vous qu'un texte long est également disponible, comme dans le corps du texte ou par le biais d'un lien.",
    "1_1_1_H2.EG5": "L'élément Img à l'intérieur d'un lien ne doit pas utiliser de texte alt qui duplique le contenu textuel du lien.",
    "1_1_1_H2.EG4": "L'élément Img à l'intérieur d'un lien a du texte alt vide ou manquant lorsqu'un lien à côté contient du texte de lien. Pensez à combiner les liens.",
    "1_1_1_H2.EG3": "L'élément Img à l'intérieur d'un lien ne doit pas utiliser de texte alt qui duplique le contenu d'un lien texte à côté.",
    "1_1_1_H53,ARIA6": "Les éléments d'objet doivent contenir une alternative de texte après l'épuisement de toutes les autres alternatives.",
    "1_1_1_G94,G92.Object,ARIA6": "Vérifiez que des textes courts (et, le cas échéant, les longs) sont disponibles pour les contenus non textuels qui servent le même but et présentent la même information.",
    "1_1_1_H35.3": "Les éléments de l'applet doivent contenir une alternative textuelle dans le corps de l'élément, pour les navigateurs qui ne supportent pas l'élément applet.",
    "1_1_1_H35.2": "Les éléments de l'applet doivent contenir un attribut alt, afin de fournir une alternative textuelle aux navigateurs supportant l'élément mais incapables de charger l'applet.",
    "1_1_1_G94,G92.Applet": "Vérifiez que des textes courts (et, le cas échéant, les longs) sont disponibles pour les contenus non textuels qui servent le même but et présentent la même information.",
    "1_2_1_G158": "Si cet objet incorporé ne contient que de l'audio préenregistré et n'est pas fourni comme alternative pour le contenu textuel, vérifiez qu'une version texte alternative est disponible.",
    "1_2_1_G159,G166": "Si cet objet incorporé ne contient que de la vidéo préenregistrée et n'est pas fourni comme alternative au contenu textuel, vérifiez qu'une version texte alternative est disponible, ou qu'une piste audio est fournie qui présente des informations équivalentes.",
    "1_2_2_G87,G93": "Si cet objet incorporé contient un support synchronisé préenregistré et n'est pas fourni comme alternative pour le contenu textuel, vérifiez que les légendes sont fournies pour le contenu audio.",
    "1_2_3_G69,G78,G173,G8": "Si cet objet incorporé contient un support synchronisé préenregistré et n'est pas fourni comme alternative au contenu textuel, vérifiez qu'une description audio de sa vidéo et/ou une version textuelle alternative du contenu est fournie.",
    "1_2_4_G9,G87,G93": "Si cet objet incorporé contient des médias synchronisés, vérifiez que les légendes sont fournies pour le contenu audio en direct.",
    "1_2_5_G78,G173,G8": "Si cet objet incorporé contient un support synchronisé préenregistré, vérifiez qu'une description audio est fournie pour son contenu vidéo.",
    "1_2_6_G54,G81": "Si cet objet incorporé contient un support synchronisé préenregistré, vérifiez qu'une interprétation en langage des signes est fournie pour l'audio.",
    "1_2_7_G8": "Si cet objet incorporé contient des médias synchronisés, et si les pauses dans l'audio de premier plan ne suffisent pas pour permettre aux descriptions audio de transmettre le sens de la vidéo préenregistrée, vérifiez qu'une description audio étendue est fournie, soit par le biais d'un script ou d'une autre version.",
    "1_2_8_G69,G159": "Si cet objet incorporé contient un média synchronisé pré-enregistré ou un contenu vidéo uniquement, vérifiez qu'une version texte alternative du contenu est fournie.",
    "1_2_9_G150,G151,G157": "Si cet objet incorporé contient du contenu audio en direct, vérifiez qu'une version texte alternative du contenu est fournie.",
    "1_3_1_F92,ARIA4": 'Le rôle de cet élément est "présentation" mais contient des éléments enfants avec une signification sémantique.',
    "1_3_1_H44.NonExistent": "L'attribut \"for\" de cette étiquette contient un identifiant qui n'existe pas dans le document.",
    "1_3_1_H44.NonExistentFragment": "L'attribut \"for\" de cette étiquette contient un ID qui n'existe pas dans le fragment de document.",
    "1_3_1_H44.NotFormControl": "L'attribut \"for\" de cette étiquette contient un ID pour un élément qui n'est pas un contrôle de formulaire. Assurez-vous d'avoir saisi l'ID correct pour l'élément prévu.",
    "1_3_1_H65": 'Ce contrôle de formulaire a un attribut "title" qui est vide ou ne contient que des espaces. Il sera ignoré à des fins de test d\'étiquetage.',
    "1_3_1_ARIA6": 'Ce contrôle de formulaire possède un attribut "aria-label" qui est vide ou ne contient que des espaces. Il sera ignoré à des fins de test d\'étiquetage.',
    "1_3_1_ARIA16,ARIA9": "Ce contrôle de formulaire contient un attribut aria-labelledby, mais il inclut un ID \"{{id}}\" qui n'existe pas sur un élément. L'attribut aria-labelledby sera ignoré à des fins de test d'étiquetage.",
    "1_3_1_F68.Hidden": "Ce champ de formulaire caché est étiqueté d'une manière ou d'une autre. Il ne devrait pas être nécessaire d'étiqueter un champ de formulaire caché.",
    "1_3_1_F68.HiddenAttr": "Ce champ de formulaire est destiné à être masqué (à l'aide de l'attribut \"caché\"), mais il est également étiqueté d'une manière ou d'une autre. Il ne devrait pas être nécessaire d'étiqueter un champ de formulaire caché.",
    "1_3_1_F68": 'Ce champ du formulaire doit être étiqueté d\'une manière ou d\'une autre. Utilisez l\'élément d\'étiquette (avec un attribut "for" ou enroulé autour du champ du formulaire), ou les attributs "title", "aria-label" ou "aria-labelledby" selon le cas.',
    "1_3_1_H49.": "Le balisage de présentation utilisé est devenu obsolète dans HTML5.",
    "1_3_1_H49.AlignAttr": "Aligner les attributs.",
    "1_3_1_H49.Semantic": "Le balisage sémantique doit être utilisé pour marquer un texte accentué ou un texte spécial afin qu'il puisse être déterminé par programmation.",
    "1_3_1_H49.AlignAttr.Semantic": "Le balisage sémantique doit être utilisé pour marquer un texte accentué ou un texte spécial afin qu'il puisse être déterminé par programmation.",
    "1_3_1_H42": "Une balise d'en-tête doit être utilisée si ce contenu est destiné à servir d'en-tête.",
    "1_3_1_H63.3": "La cellule de table a un attribut de portée invalide. Les valeurs valides sont ligne, col, groupe de lignes, groupe de lignes ou groupe de colonnes.",
    "1_3_1_H63.2": "Les attributs Scope sur les éléments td qui servent de titres pour d'autres éléments sont obsolètes dans HTML5. Utilisez un th élément à la place.",
    "1_3_1_H43.ScopeAmbiguous": "Les attributs de portée sur ces éléments sont ambigus dans un tableau à niveaux multiples d'en-têtes. Utilisez plutôt l'attribut headers sur les éléments td.",
    "1_3_1_H43.IncorrectAttr": 'L\'attribut d\'en-tête incorrect sur cet élément td. Attendue "{{expected}}" mais trouvée "{{actual}}".',
    "1_3_1_H43.IncorrectAttrNotice": "Check that headers attribute on td element is correct.",
    "1_3_1_H43.HeadersRequired": "La relation entre les éléments td et leurs éléments associés n'est pas définie. Comme cette table a plusieurs niveaux de ces éléments, vous devez utiliser l'attribut headers sur les éléments td.",
    "1_3_1_H43.MissingHeaderIds": "Tous les éléments de cette table ne contiennent pas un attribut id. Ces cellules devraient contenir des ids de sorte qu'elles puissent être référencées par des éléments td attributs d'en-têtes.",
    "1_3_1_H43.MissingHeadersAttrs": "Tous les éléments td de cette table ne contiennent pas un attribut d'en-tête. Chaque attribut d'en-tête devrait énumérer les ids de tous les éléments associés à cette cellule.",
    "1_3_1_H43,H63": "La relation entre les éléments td et leurs éléments associés n'est pas définie. Utilisez soit l'attribut scope sur ces éléments, soit l'attribut headers sur les éléments td.",
    "1_3_1_H63.1": "Tous les éléments de ce tableau n'ont pas tous un attribut de portée. Ces cellules doivent contenir un attribut scope pour identifier leur association avec les éléments td.",
    "1_3_1_H73.3.LayoutTable": "Ce tableau semble être utilisé pour la mise en page, mais contient un attribut résumé. Les tableaux de présentation ne doivent pas contenir d'attributs sommaires ou, s'ils sont fournis, doivent être vides.",
    "1_3_1_H39,H73.4": "Si ce tableau est un tableau de données et qu'un attribut résumé et un élément de légende sont présents, le résumé ne doit pas dupliquer la légende.",
    "1_3_1_H73.3.Check": "Si ce tableau est un tableau de données, vérifiez que l'attribut summary décrit l'organisation du tableau ou explique comment utiliser le tableau.",
    "1_3_1_H73.3.NoSummary": "Si ce tableau est un tableau de données, envisagez d'utiliser l'attribut résumé de l'élément de tableau pour donner une vue d'ensemble de ce tableau.",
    "1_3_1_H39.3.LayoutTable": "Ce tableau semble être utilisé pour la mise en page, mais contient un élément de légende. Les tables de présentation ne doivent pas contenir de légendes.",
    "1_3_1_H39.3.Check": "Si ce tableau est un tableau de données, vérifiez que l'élément de légende décrit correctement ce tableau.",
    "1_3_1_H39.3.NoCaption": "Si ce tableau est un tableau de données, envisagez d'utiliser un élément de légende de l'élément de tableau pour identifier ce tableau.",
    "1_3_1_H71.NoLegend": "Fieldset ne contient pas d'élément de légende. Tous les champs doivent contenir un élément de légende décrivant la description du groupe de champs.",
    "1_3_1_H85.2": "Si cette liste de sélection contient des groupes d'options connexes, ils doivent être regroupés avec le groupe optgroup.",
    "1_3_1_H71.SameName": "Si ces boutons radio ou cases à cocher nécessitent une description plus détaillée au niveau du groupe, ils doivent être contenus dans un élément de l'ensemble des champs.",
    "1_3_1_H48.1": "Ce contenu semble simuler une liste non ordonnée à l'aide de texte brut. Si c'est le cas, marquer ce contenu avec un élément ul ajouterait une information de structure appropriée au document.",
    "1_3_1_H48.2": "Ce contenu semble simuler une liste ordonnée à l'aide de texte brut. Si c'est le cas, marquer ce contenu avec un élément ol ajouterait des informations de structure appropriées au document.",
    "1_3_1_G141_a": "La structure d'en-tête n'est pas imbriquée logiquement. Cet élément h{{{headingNum}} semble être l'en-tête du document primaire, donc devrait être un élément h1.",
    "1_3_1_G141_b": "La structure d'en-tête n'est pas imbriquée logiquement. Cet élément h{{{headingNum}} devrait être un h{properHeadingNum}} pour être correctement imbriqué.",
    "1_3_1_H42.2": "Étiquette d'en-tête trouvée sans contenu. Le texte qui n'est pas destiné à servir d'en-tête ne doit pas être marqué avec des balises d'en-tête.",
    "1_3_1_H48": "Si cet élément contient une section de navigation, il est recommandé de le marquer comme une liste.",
    "1_3_1_LayoutTable": "Ce tableau semble être un tableau de présentation. S'il s'agit plutôt d'un tableau de données, assurez-vous que les cellules d'en-tête sont identifiées à l'aide de ces éléments.",
    "1_3_1_DataTable": "Ce tableau semble être un tableau de données. S'il s'agit plutôt d'un tableau de présentation, assurez-vous qu'il n'y a pas d'éléments, ni de résumé ou de légende\".",
    "1_3_2_G57": "Vérifiez que le contenu est ordonné dans un ordre significatif lorsqu'il est linéarisé, par exemple lorsque les feuilles de style sont désactivées.",
    "1_3_3_G96": "Lorsque des instructions sont fournies pour comprendre le contenu, ne vous fiez pas uniquement aux caractéristiques sensorielles (telles que la forme, la taille ou l'emplacement) pour décrire les objets.",
    "1_3_4.RestrictView": "Vérifiez que le contenu ne limite pas son affichage et son fonctionnement à une seule orientation d'affichage, telle que portrait ou paysage, à moins qu'une orientation d'affichage spécifique ne soit essentielle.",
    "1_3_5_H98.FaultyValue": "Cet élément contient une valeur potentiellement erronée dans son attribut d'autocomplétion : {{valuesStr}}. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutocomplete_Text": "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Text. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutocomplete_Multiline": "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Multiline. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutocomplete_Password": "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Password. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutocomplete_Url": "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Url. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutocomplete_Telephone": "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Telephone. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutocomplete_Numeric": "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Numeric. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutocomplete_Month": "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Month. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutocomplete_Date": "Valeur d'autocomplétion invalide : {{x}}. L'élément n'appartient pas au groupe de contrôle Date. Voir https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.Purpose": "Vérifiez que le champ de saisie répond à un objectif identifié dans la section Objectifs de saisie des composants de l'interface utilisateur ; et que le contenu est mis en œuvre à l'aide de technologies permettant d'identifier la signification attendue des données saisies dans le formulaire.",
    "1_3_5_H98.MissingAutocomplete": "Cet élément n'a pas d'attribut d'autocomplétion. Si ce champ recueille des informations sur l'utilisateur, envisagez d'en ajouter un pour respecter ce critère de réussite.",
    "1_3_6_ARIA11.Check": "Vérifiez que l'objectif des composants de l'interface utilisateur, des icônes et des régions peut être déterminé par programme.",
    "1_4_1_G14,G18": "Vérifier que toute information véhiculée par la couleur seule est également disponible sous forme de texte ou d'autres repères visuels.",
    "1_4_2_F23": "Si cet élément contient de l'audio qui joue automatiquement pendant plus de 3 secondes, vérifiez qu'il est possible de mettre en pause, d'arrêter ou de couper le son.",
    "1_4_3_F24.BGColour": "Vérifiez que cet élément a une couleur d'avant-plan héritée pour compléter la couleur ou l'image d'arrière-plan en ligne correspondante.",
    "1_4_3_F24.FGColour": "Vérifiez que cet élément a une couleur ou une image d'arrière-plan héritée pour compléter la couleur d'avant-plan correspondante.",
    "1_4_3_G18_or_G145.Abs": "Cet élément est absolument positionné et la couleur de fond ne peut pas être déterminée. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'arrière-plan est d'au moins {{nécessaire}}:1.",
    "1_4_3_G18_or_G145.BgImage": "Le texte de cet élément est placé sur une image de fond. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'image est d'au moins {{nécessaire}}:1.",
    "1_4_3_G18_or_G145.Alpha": "Le texte ou l'arrière-plan de cet élément contient de la transparence. Assurez-vous que le rapport de contraste entre le texte et l'arrière-plan est d'au moins {{nécessaire}}:1.",
    "1_4_3_G18_or_G145.Fail": "Cet élément a un contraste insuffisant à ce niveau de conformité. On s'attendait à un rapport de contraste d'au moins {{required}}:1, mais le texte dans cet élément a un rapport de contraste de {{value}}:1.",
    "1_4_3_G18_or_G145.Fail.Recomendation": "Recommandation : ",
    "1_4_3_G18_or_G145.Fail.Recomendation.Text": "changement Couleur du texte à {{value}}",
    "1_4_3_G18_or_G145.Fail.Recomendation.Background": "changement Fond à {{value}}",
    "1_4_4_G142": "Vérifiez que le texte peut être redimensionné sans technologie d'assistance jusqu'à 200 pour cent sans perte de contenu ou de fonctionnalité.",
    "1_4_5_G140,C22,C30.AALevel": "Si les technologies utilisées permettent d'obtenir une présentation visuelle, vérifiez que le texte est utilisé pour transmettre des informations plutôt que des images de texte, sauf lorsque l'image du texte est essentielle à l'information véhiculée, ou peut être visuellement adaptée aux besoins de l'utilisateur.",
    "1_4_6_G18_or_G17.Abs": "Cet élément est absolument positionné et la couleur de fond ne peut pas être déterminée. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'arrière-plan est d'au moins {{nécessaire}}:1.",
    "1_4_6_G18_or_G17.BgImage": "Le texte de cet élément est placé sur une image de fond. Assurez-vous que le rapport de contraste entre le texte et toutes les parties couvertes de l'image est d'au moins {{nécessaire}}:1.",
    "1_4_6_G18_or_G17.Fail": "Cet élément a un contraste insuffisant à ce niveau de conformité. On s'attendait à un rapport de contraste d'au moins {{required}}:1, mais le texte dans cet élément a un rapport de contraste de {{value}}:1.",
    "1_4_6_G18_or_G17.Fail.Recomendation": "Recommandation : ",
    "1_4_6_G18_or_G17.Fail.Recomendation.Text": "changement Couleur du texte à {{value}}",
    "1_4_6_G18_or_G17.Fail.Recomendation.Background": "changement Fond à {{value}}",
    "1_4_7_G56": "Pour le contenu audio préenregistré de cet élément qui est principalement de la parole (comme la narration), tout bruit de fond devrait être muet, ou être au moins 20 dB (ou environ 4 fois plus silencieux que le discours).",
    "1_4_8_G148,G156,G175": "Vérifiez qu'il existe un mécanisme permettant à l'utilisateur de sélectionner les couleurs d'avant-plan et d'arrière-plan pour les blocs de texte, soit par l'intermédiaire de la page Web ou du navigateur.",
    "1_4_8_H87,C20": "Vérifiez qu'il existe un mécanisme permettant de réduire la largeur d'un bloc de texte à un maximum de 80 caractères (ou 40 en caractères chinois, japonais ou coréen).",
    "1_4_8_C19,G172,G169": "Vérifiez que les blocs de texte ne sont pas entièrement justifiés - c'est-à-dire à gauche et à droite - ou qu'il existe un mécanisme pour supprimer toute justification.",
    "1_4_8_G188,C21": "Vérifiez que l'interligne dans les blocs de texte est d'au moins 150% dans les paragraphes et que l'interligne est d'au moins 1,5 fois l'interligne ou qu'il existe un mécanisme pour y parvenir.",
    "1_4_8_H87,G146,C26": "Vérifiez que le texte peut être redimensionné sans technologie d'assistance jusqu'à 200 pour cent sans que l'utilisateur ait besoin de faire défiler horizontalement sur une fenêtre plein écran.",
    "1_4_9_G140,C22,C30.NoException": "Vérifier que les images de texte ne sont utilisées qu'à des fins de décoration pure ou lorsqu'une présentation particulière du texte est essentielle à l'information véhiculée.",
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Check": "Vérifier que le contenu peut être présenté sans perte d'information ou de fonctionnalité, et sans qu'il soit nécessaire de le faire défiler en deux dimensions :          Contenu à défilement vertical d'une largeur équivalente à 320 pixels CSS;         Contenu à défilement horizontal d'une hauteur équivalente à 256 pixels CSS;          A l'exception des parties du contenu qui nécessitent une mise en page en deux dimensions pour l'utilisation ou la signification.",
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed": 'Cet élément a une "position: fixed". Cela peut nécessiter un défilement en deux dimensions, ce qui est considéré comme un échec de ce critère de réussite.',
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling": "Le texte préformaté peut nécessiter un défilement en deux dimensions, ce qui est considéré comme un échec de ce critère de réussite.",
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom": "Interférer avec la capacité d'un agent utilisateur à zoomer peut être un échec de ce critère de réussite.",
    "1_4_11_G195,G207,G18,G145,G174,F78.Check": "Vérifiez que la présentation visuelle des éléments suivants présente un rapport de contraste d'au moins 3:1 par rapport à la (aux) couleur(s) adjacente(s) :         Composants de l'interface utilisateur : Informations visuelles nécessaires pour identifier les composants et les états de l'interface utilisateur, sauf pour les composants inactifs ou lorsque l'apparence du composant est déterminée par l'agent utilisateur et non modifiée par l'auteur;         Objets graphiques : Parties de graphiques nécessaires pour comprendre le contenu, sauf lorsqu'une présentation particulière des graphiques est essentielle à l'information véhiculée.     ",
    "1_4_12_C36,C35.Check": "Vérifiez qu'aucune perte de contenu ou de fonctionnalité ne se produit en définissant tous les éléments suivants et en ne modifiant aucune autre propriété de style:           Hauteur de ligne (interligne) à au moins 1,5 fois la taille de la police;      Espacement des paragraphes suivants à au moins 2 fois la taille de la police;      Espacement des lettres (suivi) d'au moins 0,12 fois la taille de la police;      Espacement des mots d'au moins 0,16 fois la taille de la police.",
    "1_4_13_F95.Check": "Vérifiez que lorsque la réception puis la suppression du survol du pointeur ou de la mise au point du clavier déclenche l'affichage puis le masquage de contenu supplémentaire, les points suivants sont vrais :         A supprimer : Un mécanisme est disponible pour rejeter le contenu supplémentaire sans déplacer le pointeur ou le focus du clavier, sauf si le contenu supplémentaire communique une erreur de saisie ou ne masque pas ou ne remplace pas un autre contenu;         Survolable : Si le survol du pointeur peut déclencher le contenu supplémentaire, alors le pointeur peut être déplacé sur le contenu supplémentaire sans que le contenu supplémentaire ne disparaisse;         Persistant : Le contenu supplémentaire reste visible jusqu'à ce que le déclencheur de survol ou de mise au point soit supprimé, que l'utilisateur le rejette ou que ses informations ne soient plus valables     ",
    "2_1_1_G90": "S'assurer que la fonctionnalité fournie par un gestionnaire d'événements pour cet élément est disponible par l'intermédiaire du clavier.",
    "2_1_1_SCR20.DblClick": "Assurez-vous que la fonctionnalité fournie en double-cliquant sur cet élément est disponible par l'intermédiaire du clavier.",
    "2_1_1_SCR20.MouseOver": "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement focus.",
    "2_1_1_SCR20.MouseOut": "Assurez-vous que la fonctionnalité fournie par la souris hors de cet élément est disponible par le clavier ; par exemple, en utilisant l'événement flou.",
    "2_1_1_SCR20.MouseMove": "Assurez-vous que la fonctionnalité fournie en déplaçant la souris sur cet élément est disponible par l'intermédiaire du clavier.",
    "2_1_1_SCR20.MouseDown": "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement keydown.",
    "2_1_1_SCR20.MouseUp": "Assurez-vous que la fonctionnalité fournie par la souris sur cet élément est disponible par l'intermédiaire du clavier, par exemple, en utilisant l'événement keyup.",
    "2_1_2_F10": "Vérifiez que cette applet ou plugin permet d'éloigner le focus de lui-même lors de l'utilisation du clavier.",
    "2_1_4.Check": "Vérifiez que si un raccourci clavier est implémenté dans un contenu utilisant uniquement des lettres (y compris les majuscules et les minuscules), de la ponctuation, des chiffres ou des symboles, alors au moins l'un des points suivants est vrai :          Désactiver : Un mécanisme est disponible pour désactiver le raccourci :         Remap : Un mécanisme est disponible pour redéfinir le raccourci afin d'utiliser un ou plusieurs caractères de clavier non imprimables (par exemple Ctrl, Alt, etc.);         Actif uniquement pour la mise au point : Le raccourci clavier pour un composant de l'interface utilisateur n'est actif que lorsque ce composant a le focus.     ",
    "2_2_1_F40.2": "Meta refresh tag utilisé pour rediriger vers une autre page, avec une limite de temps qui n'est pas nulle. Les utilisateurs ne peuvent pas contrôler cette limite de temps.",
    "2_2_1_F41.2": "Meta refresh tag utilisé pour rafraîchir la page courante. Les utilisateurs ne peuvent pas contrôler la limite de temps pour ce rafraîchissement.",
    "2_2_2_SCR33,SCR22,G187,G152,G186,G191": "Si une partie du contenu bouge, défile ou clignote pendant plus de 5 secondes, ou se met à jour automatiquement, vérifiez qu'il existe un mécanisme permettant de mettre en pause, d'arrêter ou de cacher le contenu.",
    "2_2_2_F4": "S'assurer qu'il existe un mécanisme permettant d'arrêter cet élément clignotant en moins de cinq secondes.",
    "2_2_2_F47": "Les éléments clignotants ne peuvent pas satisfaire à l'exigence selon laquelle les informations clignotantes peuvent être arrêtées en moins de cinq secondes.",
    "2_2_3_G5": "Vérifier que le chronométrage n'est pas une partie essentielle de l'événement ou de l'activité présentée par le contenu, à l'exception des médias synchronisés non interactifs et des événements en temps réel.",
    "2_2_4_SCR14": "Vérifier que toutes les interruptions (y compris les mises à jour du contenu) peuvent être reportées ou supprimées par l'utilisateur, à l'exception des interruptions impliquant une situation d'urgence.",
    "2_2_5_G105,G181": "Si cette page Web fait partie d'un ensemble de pages Web avec une limite de temps d'inactivité, vérifiez qu'un utilisateur authentifié peut poursuivre l'activité sans perte de données après la ré-authentification.",
    "2_2_6.Check": "Vérifiez que les utilisateurs sont avertis de la durée de toute inactivité de l'utilisateur qui pourrait entraîner une perte de données, à moins que les données ne soient conservées pendant plus de 20 heures lorsque l'utilisateur n'entreprend aucune action.",
    "2_3_1_G19,G176": "Vérifier qu'aucun composant du contenu ne clignote plus de trois fois au cours d'une période d'une seconde ou que la taille de la zone de clignotement est suffisamment petite.",
    "2_3_2_G19": "Vérifiez qu'aucun composant du contenu ne clignote plus de trois fois au cours d'une période d'une seconde.",
    "2_3_3.Check": "Vérifiez que l'animation de mouvement déclenchée par l'interaction peut être désactivée, à moins que l'animation ne soit essentielle à la fonctionnalité ou à l'information véhiculée.",
    "2_4_1_H64.1": "L'élément Iframe nécessite un attribut de titre non vide qui identifie la trame.",
    "2_4_1_H64.2": "Vérifiez que l'attribut title de cet élément contient du texte qui identifie le cadre.",
    "2_4_1_G1,G123,G124,H69": "Veiller à ce que tous les éléments de navigation communs puissent être contournés ; par exemple, en utilisant des liens de saut, des éléments d'en-tête ou des rôles de repère ARIA.",
    "2_4_1_G1,G123,G124.NoSuchID": 'Ce lien pointe vers une ancre nommée "{{id}}" dans le document, mais aucune ancre n\'existe avec ce nom.',
    "2_4_1_G1,G123,G124.NoSuchIDFragment": 'Ce lien pointe vers une ancre nommée "{{id}}" dans le document, mais aucune ancre n\'existe avec ce nom dans le fragment testé.',
    "2_4_2_H25.1.NoHeadEl": "Il n'y a pas de section d'en-tête dans laquelle placer un élément de titre descriptif.",
    "2_4_2_H25.1.NoTitleEl": "Un titre devrait être fourni pour le document, en utilisant un élément de titre non vide dans la section d'en-tête.",
    "2_4_2_H25.1.EmptyTitle": "L'élément de titre de la section d'en-tête ne doit pas être vide.",
    "2_4_2_H25.2": "Vérifier que l'élément de titre décrit le document.",
    "2_4_3_H4.2": "Si tabindex est utilisé, vérifiez que l'ordre des onglets spécifié par les attributs de tabindex suit les relations dans le contenu.",
    "2_4_4_H77,H78,H79,H80,H81,H33": "Vérifiez que le texte du lien combiné avec le contexte du lien déterminé par le programme, ou son attribut de titre, identifie le but du lien.",
    "2_4_4_H77,H78,H79,H80,H81": "Vérifiez que le texte du lien combiné avec le contexte du lien déterminé par le programme identifie le but du lien.",
    "2_4_5_G125,G64,G63,G161,G126,G185": "Si cette page Web ne fait pas partie d'un processus linéaire, vérifiez qu'il existe plus d'une façon de localiser cette page Web dans un ensemble de pages Web.",
    "2_4_6_G130,G131": "Vérifiez que les en-têtes et les étiquettes décrivent le sujet ou le but.",
    "2_4_7_G149,G165,G195,C15,SCR31": "Vérifiez qu'il existe au moins un mode de fonctionnement dans lequel l'indicateur de mise au point du clavier peut être placé visuellement sur les commandes de l'interface utilisateur.",
    "2_4_8_H59.1": "Les éléments de lien ne peuvent être situés que dans la section d'en-tête du document.",
    "2_4_8_H59.2a": "Il manque à l'élément Link un attribut rel non vide identifiant le type de lien.",
    "2_4_8_H59.2b": "L'élément Link manque un attribut href non vide pointant vers la ressource liée.",
    "2_4_9_H30": "Vérifiez que le texte du lien décrit l'objet du lien.",
    "2_5_1.Check": "Vérifiez que toutes les fonctionnalités qui utilisent des gestes multipoints ou basés sur le chemin peuvent être utilisées avec un seul pointeur sans geste basé sur le chemin, sauf si un geste multipoint ou basé sur le chemin est essentiel.",
    "2_5_2.SinglePointer_Check": "Vérifiez que pour les fonctionnalités qui peuvent être exploitées à l'aide d'un seul pointeur, au moins une des conditions suivantes est remplie :         No Down-Event : Le down-event du pointeur n'est pas utilisé pour exécuter une partie de la fonction;         Abandon ou Annulation : L'achèvement de la fonction se fait sur l'événement haut, et un mécanisme est disponible pour annuler la fonction avant l'achèvement ou pour annuler la fonction après l'achèvement;         Inversion haut : Le up-event inverse tout résultat du down-event précédent;         Essentiel : Il est essentiel de terminer la fonction lors de l'événement descendant.",
    "2_5_2.Mousedown_Check": "Cet élément a un écouteur d'événement \"mousedown\". Vérifiez que pour les fonctionnalités qui peuvent être exploitées à l'aide d'un seul pointeur, au moins une des conditions suivantes est remplie :         No Down-Event : Le down-event du pointeur n'est pas utilisé pour exécuter une partie de la fonction;         Abandon ou Annulation : L'achèvement de la fonction se fait sur l'événement haut, et un mécanisme est disponible pour annuler la fonction avant l'achèvement ou pour annuler la fonction après l'achèvement;         Inversion haut : Le up-event inverse tout résultat du down-event précédent;         Essentiel : Il est essentiel de terminer la fonction lors de l'événement descendant.",
    "2_5_2.Touchstart_Check": "Cet élément a un écouteur de l'événement Touchstart.  Vérifiez que pour les fonctionnalités qui peuvent être exploitées à l'aide d'un seul pointeur, au moins une des conditions suivantes est remplie :             No Down-Event : Le down-event du pointeur n'est pas utilisé pour exécuter une partie de la fonction;         Abandon ou Annulation : L'achèvement de la fonction se fait sur l'événement haut, et un mécanisme est disponible pour annuler la fonction avant l'achèvement ou pour annuler la fonction après l'achèvement;         Inversion haut : Le up-event inverse tout résultat du down-event précédent;         Essentiel : Il est essentiel de terminer la fonction lors de l'événement descendant.",
    "2_5_3_F96.Check": "Vérifiez que pour les composants de l'interface utilisateur dont les étiquettes comportent du texte ou des images de texte, le nom contient le texte qui est présenté visuellement.",
    "2_5_3_F96.AccessibleName": "Le nom accessible de cet élément ne contient pas le texte visible de l'étiquette. Vérifiez que pour les composants de l'interface utilisateur dont les étiquettes comportent du texte ou des images de texte, le nom contient le texte qui est présenté visuellement.",
    "2_5_4.Check": "Vérifiez que les fonctionnalités qui peuvent être commandées par le mouvement de l'appareil ou de l'utilisateur peuvent également être commandées par les composants de l'interface utilisateur et que la réponse au mouvement peut être désactivée pour éviter tout actionnement accidentel, sauf dans les cas suivants             Interface supportée : Le mouvement est utilisé pour faire fonctionner la fonctionnalité par le biais d'une interface accessible et prise en charge;         Essentiel : Le mouvement est essentiel pour la fonction et le faire invaliderait l'activité.     ",
    "2_5_4.Devicemotion": "Cet élément a un auditeur d'événement de devicemotion. Vérifiez que les fonctionnalités qui peuvent être commandées par le mouvement de l'appareil ou de l'utilisateur peuvent également être commandées par les composants de l'interface utilisateur et que la réponse au mouvement peut être désactivée pour éviter tout actionnement accidentel, sauf dans les cas suivants         Interface supportée : Le mouvement est utilisé pour faire fonctionner la fonctionnalité par le biais d'une interface accessible et prise en charge;         Essentiel : Le mouvement est essentiel pour la fonction et le faire invaliderait l'activité.     ",
    "2_5_5.Check": "Vérifiez que la taille de la cible pour les entrées de pointeur est au moins de 44 par 44 pixels CSS, sauf si :         Equivalent : La cible est disponible par un lien ou un contrôle équivalent sur la même page qui est au moins de 44 par 44 pixels CSS;         Inline : La cible se trouve dans une phrase ou un bloc de texte;         Contrôle de l'agent utilisateur : La taille de la cible est déterminée par l'agent utilisateur et n'est pas modifiée par l'auteur;         Essentiel : Une présentation particulière de la cible est essentielle à l'information véhiculée",
    "2_5_6.Check": "Vérifier que le contenu ne restreint pas l'utilisation des modalités de saisie disponibles sur une plate-forme, sauf si la restriction est essentielle, nécessaire pour assurer la sécurité du contenu ou requise pour respecter les paramètres de l'utilisateur.",
    "3_1_1_H57.2": "L'élément html doit avoir un attribut lang ou xml:lang qui décrit la langue du document.",
    "3_1_1_H57.3.Lang": "La langue spécifiée dans l'attribut lang de l'élément de document ne semble pas être bien formée.",
    "3_1_1_H57.3.XmlLang": "La langue spécifiée dans l'attribut xml:lang de l'élément document ne semble pas être bien formée.",
    "3_1_2_H58": "Assurez-vous que tout changement de langue est marqué à l'aide de l'attribut lang et/ou xml:lang sur un élément, selon le cas.",
    "3_1_2_H58.1.Lang": "La langue spécifiée dans l'attribut lang de cet élément ne semble pas être bien formée.",
    "3_1_2_H58.1.XmlLang": "Le langage spécifié dans l'attribut xml:lang de cet élément ne semble pas être bien formé.",
    "3_1_3_H40,H54,H60,G62,G70": "Vérifier qu'il existe un mécanisme permettant d'identifier des définitions spécifiques de mots ou de phrases utilisés d'une manière inhabituelle ou restreinte, y compris les expressions idiomatiques et le jargon.",
    "3_1_4_G102,G55,G62,H28,G97": "Vérifier qu'il existe un mécanisme permettant d'identifier la forme élargie ou la signification des abréviations.",
    "3_1_5_G86,G103,G79,G153,G160": "Lorsque le contenu exige une capacité de lecture plus avancée que le niveau de l'enseignement secondaire inférieur, un contenu supplémentaire ou une version alternative devrait être fourni.",
    "3_1_6_H62.1.HTML5": "Ruby element does not contain an rt element containing prononciation information for its body text.",
    "3_1_6_H62.1.XHTML11": "Ruby element does not contain an rt element containing prononciation information for the text inside the rb element.",
    "3_1_6_H62.2": "Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.",
    "3_2_1_G107": "Vérifier qu'il n'y a pas de changement de contexte lorsque ce champ de saisie reçoit le focus.",
    "3_2_2_H32.2": 'Ce formulaire ne contient pas de bouton de soumission, ce qui crée des problèmes pour ceux qui ne peuvent pas soumettre le formulaire à l\'aide du clavier. Les boutons Submit sont des éléments INPUT avec l\'attribut de type "submit" ou "image", ou des éléments BUTTON avec le type "submit" ou omis/invalid.',
    "3_2_3_G61": "Vérifiez que les mécanismes de navigation qui sont répétés sur plusieurs pages Web se produisent dans le même ordre relatif chaque fois qu'ils sont répétés, à moins qu'un changement ne soit initié par l'utilisateur.",
    "3_2_4_G197": "Vérifier que les composants qui ont la même fonctionnalité dans cette page Web sont identifiés de manière cohérente dans l'ensemble des pages Web auxquelles ils appartiennent.",
    "3_2_5_H83.3": "Vérifiez que le texte du lien de ce lien contient des informations indiquant que le lien s'ouvrira dans une nouvelle fenêtre.",
    "3_3_1_G83,G84,G85": "Si une erreur de saisie est automatiquement détectée dans ce formulaire, vérifiez que le ou les éléments erronés sont identifiés et que l'erreur ou les erreurs sont décrites à l'utilisateur sous forme de texte.",
    "3_3_2_G131,G89,G184,H90": "Vérifier que les étiquettes descriptives ou les instructions (y compris pour les champs obligatoires) sont fournies pour l'entrée de l'utilisateur dans ce formulaire.",
    "3_3_3_G177": "Vérifier que ce formulaire fournit les corrections suggérées en cas d'erreurs dans les entrées des utilisateurs, à moins que cela ne compromette la sécurité ou l'objectif du contenu.",
    "3_3_4_G98,G99,G155,G164,G168.LegalForms": "Si ce formulaire lie un utilisateur à un engagement financier ou juridique, modifie/supprime des données contrôlables par l'utilisateur, ou soumet des réponses de test, assurez-vous que les soumissions sont réversibles, vérifiées pour les erreurs de saisie et/ou confirmées par l'utilisateur.",
    "3_3_5_G71,G184,G193": "Vérifiez que l'aide contextuelle est disponible pour ce formulaire, au niveau de la page Web et/ou du contrôle.",
    "3_3_6_G98,G99,G155,G164,G168.AllForms": "Vérifier que les soumissions à ce formulaire sont soit réversibles, soit vérifiées pour les erreurs de saisie, et/ou confirmées par l'utilisateur.",
    "4_1_1_F77": 'Dupliquer la valeur de l\'attribut id "{{id}}" trouvée sur la page web.',
    "4_1_2_H91.A.Empty": "L'élément d'ancrage trouvé avec un ID mais sans href ou texte de lien. Envisager de déplacer son ID vers un élément parent ou un élément voisin.",
    "4_1_2_H91.A.EmptyWithName": "L'élément d'ancrage trouvé avec un attribut de nom mais sans href ou texte de lien. Envisagez de déplacer l'attribut de nom pour qu'il devienne l'ID d'un parent ou d'un élément voisin.",
    "4_1_2_H91.A.EmptyNoId": "Élément d'ancrage trouvé sans contenu de lien et sans nom et/ou attribut ID.",
    "4_1_2_H91.A.NoHref": "Les éléments d'ancrage ne doivent pas être utilisés pour définir des cibles de liens en page. Si vous n'utilisez pas l'ID à d'autres fins (comme le CSS ou le script), envisagez de le déplacer vers un élément parent",
    "4_1_2_H91.A.Placeholder": "L'élément d'ancrage trouvé avec le contenu du lien, mais aucun attribut href, ID ou nom n'a été fourni.",
    "4_1_2_H91.A.NoContent": "L'élément d'ancrage trouvé avec un attribut href valide, mais aucun contenu de lien n'a été fourni.",
    "4_1_2_input_element": "élément d'entrée",
    "4_1_2_element_content": "contenu de l'élément",
    "4_1_2_element": "élément",
    "4_1_2_msg_pattern": "Ce {{msgNodeType}} n'a pas de nom disponible pour une API d'accessibilité. Les noms valides le sont : {{builtAttrs}}.",
    "4_1_2_msg_pattern_role_of_button": "Ce l'élément a un rôle de \"bouton\" mais n'a pas de nom disponible pour une API d'accessibilité. Les noms valides le sont : {{builtAttrs}}.",
    "4_1_2_msg_pattern2": "Cette {{{msgNodeType}} n'a pas de valeur disponible pour une API d'accessibilité.",
    "4_1_2_msg_add_one": "Ajouter un en ajoutant du contenu à l'élément.",
    "4_1_2_msg_pattern3": "Cette {{msgNodeType}} n'a pas d'option initialement sélectionnée. Selon votre version HTML, la valeur exposée à une API d'accessibilité peut être indéfinie.",
    "4_1_2_value_exposed_using_attribute": "Une valeur est exposée à l'aide de l'attribut {{requiredValue}}.",
    "4_1_2_value_exposed_using_element": "Une valeur est exposée à l'aide de l'élément {{requiredValue}}.",
    "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check": "Vérifier que les messages de statut peuvent être déterminés par programme grâce à des rôles ou des propriétés tels qu'ils peuvent être présentés à l'utilisateur par des technologies d'assistance sans recevoir de mise au point."
};

_global.translation["it"] = {
    auditor_name: "HTML_CodeSniffer di Squiz",
    auditor_using_standard: "Standard in uso: ",
    auditor_standards: "Standard",
    auditor_code_snippet: "Codice coinvolto",
    auditor_close: "Chiudi",
    auditor_select_types: "Seleziona il tipo di verifiche da includere nel report",
    auditor_home: "Inizio",
    auditor_view_report: "Risultati del report",
    auditor_report: "Report",
    auditor_back_to_report: "Torna al report",
    auditor_previous_issue: "Problema Precedente",
    auditor_next_issue: "Problema Successivo",
    auditor_issue: "Problema",
    auditor_of: "di",
    auditor_errors: "Errori",
    auditor_error: "Errore",
    auditor_warnings: "Avvisi",
    auditor_warning: "Avviso",
    auditor_notices: "Note",
    auditor_notice: "Nota",
    auditor_toggle_display_of: "Visibilità di",
    auditor_messages: "messaggi",
    auditor_unable_to_point: "Unable to point to the element associated with this issue.",
    auditor_unable_to_point_entire: "Unable to point to this issue, as it relates to the entire document.",
    auditor_unable_to_point_removed: "Unable to point to this element as it has been removed from the document since the report was generated.",
    auditor_unable_to_point_outside: "Unable to point to this element because it is located outside the document's body element.",
    auditor_unable_to_point_hidden: "Unable to point to this element because it is hidden from view, or does not have a visual representation.",
    auditor_point_to_element: "Point to Element",
    auditor_unsupported_browser: "La funzionalità «parte di codice» non funziona su questo browser.",
    auditor_page: "Pagina",
    auditor_updated_to: "Abbiamo aggiornato HTML_CodeSniffer alla versione",
    auditor_view_the_changelog: "Elenco delle modifiche",
    auditor_success_criterion: "Requisito di successo",
    auditor_suggested_techniques: "Tecniche suggerite",
    auditor_applies_entire_document: "Si applica a tutto il documento",
    "1_1_1_H30.2": "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.",
    "1_1_1_H67.1": "Img element with empty alt text must have absent or empty title attribute.",
    "1_1_1_H67.2": "Img element is marked so that it is ignored by Assistive Technology.",
    "1_1_1_H37": "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.",
    "1_1_1_G94.Image": "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.",
    "1_1_1_H36": "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.",
    "1_1_1_G94.Button": "Ensure that the image submit button's alt text identifies the purpose of the button.",
    "1_1_1_H24": "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.",
    "1_1_1_H24.2": "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.",
    "1_1_1_G73,G74": "If this image cannot be fully described in a short text alternative, ensure a long text alternative is also available, such as in the body text or through a link.",
    "1_1_1_H2.EG5": "Img element inside a link must not use alt text that duplicates the text content of the link.",
    "1_1_1_H2.EG4": "Img element inside a link has empty or missing alt text when a link beside it contains link text. Consider combining the links.",
    "1_1_1_H2.EG3": "Img element inside a link must not use alt text that duplicates the content of a text link beside it.",
    "1_1_1_H53,ARIA6": "Object elements must contain a text alternative after all other alternatives are exhausted.",
    "1_1_1_G94,G92.Object,ARIA6": "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    "1_1_1_H35.3": "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.",
    "1_1_1_H35.2": "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.",
    "1_1_1_G94,G92.Applet": "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.",
    "1_2_1_G158": "If this embedded object contains pre-recorded audio only, and is not provided as an alternative for text content, check that an alternative text version is available.",
    "1_2_1_G159,G166": "If this embedded object contains pre-recorded video only, and is not provided as an alternative for text content, check that an alternative text version is available, or an audio track is provided that presents equivalent information.",
    "1_2_2_G87,G93": "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that captions are provided for audio content.",
    "1_2_3_G69,G78,G173,G8": "If this embedded object contains pre-recorded synchronised media and is not provided as an alternative for text content, check that an audio description of its video, and/or an alternative text version of the content is provided.",
    "1_2_4_G9,G87,G93": "If this embedded object contains synchronised media, check that captions are provided for live audio content.",
    "1_2_5_G78,G173,G8": "If this embedded object contains pre-recorded synchronised media, check that an audio description is provided for its video content.",
    "1_2_6_G54,G81": "If this embedded object contains pre-recorded synchronised media, check that a sign language interpretation is provided for its audio.",
    "1_2_7_G8": "If this embedded object contains synchronised media, and where pauses in foreground audio is not sufficient to allow audio descriptions to convey the sense of pre-recorded video, check that an extended audio description is provided, either through scripting or an alternate version.",
    "1_2_8_G69,G159": "If this embedded object contains pre-recorded synchronised media or video-only content, check that an alternative text version of the content is provided.",
    "1_2_9_G150,G151,G157": "If this embedded object contains live audio-only content, check that an alternative text version of the content is provided.",
    "1_3_1_F92,ARIA4": 'This element\'s role is "presentation" but contains child elements with semantic meaning.',
    "1_3_1_H44.NonExistent": 'This label\'s "for" attribute contains an ID that does not exist in the document.',
    "1_3_1_H44.NonExistentFragment": 'This label\'s "for" attribute contains an ID that does not exist in the document fragment.',
    "1_3_1_H44.NotFormControl": 'This label\'s "for" attribute contains an ID for an element that is not a form control. Ensure that you have entered the correct ID for the intended element.',
    "1_3_1_H65": 'This form control has a "title" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
    "1_3_1_ARIA6": 'This form control has an "aria-label" attribute that is empty or contains only spaces. It will be ignored for labelling test purposes.',
    "1_3_1_ARIA16,ARIA9": 'This form control contains an aria-labelledby attribute, however it includes an ID "{{id}}" that does not exist on an element. The aria-labelledby attribute will be ignored for labelling test purposes.',
    "1_3_1_F68.Hidden": "This hidden form field is labelled in some way. There should be no need to label a hidden form field.",
    "1_3_1_F68.HiddenAttr": 'This form field is intended to be hidden (using the "hidden" attribute), but is also labelled in some way. There should be no need to label a hidden form field.',
    "1_3_1_F68": 'This form field should be labelled in some way. Use the label element (either with a "for" attribute or wrapped around the form field), or "title", "aria-label" or "aria-labelledby" attributes as appropriate.',
    "1_3_1_H49.": "Presentational markup used that has become obsolete in HTML5.",
    "1_3_1_H49.AlignAttr": "Align attributes.",
    "1_3_1_H49.Semantic": "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.",
    "1_3_1_H49.AlignAttr.Semantic": "Semantic markup should be used to mark emphasised or special text so that it can be programmatically determined.",
    "1_3_1_H42": "Heading markup should be used if this content is intended as a heading.",
    "1_3_1_H63.3": "Table cell has an invalid scope attribute. Valid values are row, col, rowgroup, or colgroup.",
    "1_3_1_H63.2": "Scope attributes on td elements that act as headings for other elements are obsolete in HTML5. Use a th element instead.",
    "1_3_1_H43.ScopeAmbiguous": "Scope attributes on th elements are ambiguous in a table with multiple levels of headings. Use the headers attribute on td elements instead.",
    "1_3_1_H43.IncorrectAttr": 'Incorrect headers attribute on this td element. Expected "{{expected}}" but found "{{actual}}"',
    "1_3_1_H43.IncorrectAttrNotice": "Check that headers attribute on td element is correct.",
    "1_3_1_H43.HeadersRequired": "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.",
    "1_3_1_H43.MissingHeaderIds": "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.",
    "1_3_1_H43.MissingHeadersAttrs": "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.",
    "1_3_1_H43,H63": "The relationship between td elements and their associated th elements is not defined. Use either the scope attribute on th elements, or the headers attribute on td elements.",
    "1_3_1_H63.1": "Not all th elements in this table have a scope attribute. These cells should contain a scope attribute to identify their association with td elements.",
    "1_3_1_H73.3.LayoutTable": "This table appears to be used for layout, but contains a summary attribute. Layout tables must not contain summary attributes, or if supplied, must be empty.",
    "1_3_1_H39,H73.4": "If this table is a data table, and both a summary attribute and a caption element are present, the summary should not duplicate the caption.",
    "1_3_1_H73.3.Check": "If this table is a data table, check that the summary attribute describes the table's organization or explains how to use the table.",
    "1_3_1_H73.3.NoSummary": "If this table is a data table, consider using the summary attribute of the table element to give an overview of this table.",
    "1_3_1_H39.3.LayoutTable": "This table appears to be used for layout, but contains a caption element. Layout tables must not contain captions.",
    "1_3_1_H39.3.Check": "If this table is a data table, check that the caption element accurately describes this table.",
    "1_3_1_H39.3.NoCaption": "If this table is a data table, consider using a caption element to the table element to identify this table.",
    "1_3_1_H71.NoLegend": "Fieldset does not contain a legend element. All fieldsets should contain a legend element that describes a description of the field group.",
    "1_3_1_H85.2": "If this selection list contains groups of related options, they should be grouped with optgroup.",
    "1_3_1_H71.SameName": "If these radio buttons or check boxes require a further group-level description, they should be contained within a fieldset element.",
    "1_3_1_H48.1": "This content looks like it is simulating an unordered list using plain text. If so, marking up this content with a ul element would add proper structure information to the document.",
    "1_3_1_H48.2": "This content looks like it is simulating an ordered list using plain text. If so, marking up this content with an ol element would add proper structure information to the document.",
    "1_3_1_G141_a": "The heading structure is not logically nested. This h{{headingNum}} element appears to be the primary document heading, so should be an h1 element.",
    "1_3_1_G141_b": "The heading structure is not logically nested. This h{{headingNum}} element should be an h{{properHeadingNum}} to be properly nested.",
    "1_3_1_H42.2": "Heading tag found with no content. Text that is not intended as a heading should not be marked up with heading tags.",
    "1_3_1_H48": "If this element contains a navigation section, it is recommended that it be marked up as a list.",
    "1_3_1_LayoutTable": "This table appears to be a layout table. If it is meant to instead be a data table, ensure header cells are identified using th elements.",
    "1_3_1_DataTable": "This table appears to be a data table. If it is meant to instead be a layout table, ensure there are no th elements, and no summary or caption.",
    "1_3_2_G57": "Check that the content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.",
    "1_3_3_G96": "Where instructions are provided for understanding the content, do not rely on sensory characteristics alone (such as shape, size or location) to describe objects.",
    "1_4_1_G14,G18": "Check that any information conveyed using colour alone is also available in text, or through other visual cues.",
    "1_4_2_F23": "If this element contains audio that plays automatically for longer than 3 seconds, check that there is the ability to pause, stop or mute the audio.",
    "1_4_3_F24.BGColour": "Check that this element has an inherited foreground colour to complement the corresponding inline background colour or image.",
    "1_4_3_F24.FGColour": "Check that this element has an inherited background colour or image to complement the corresponding inline foreground colour.",
    "1_4_3_G18_or_G145.Abs": "This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.",
    "1_4_3_G18_or_G145.BgImage": "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
    "1_4_3_G18_or_G145.Alpha": "This element's text or background contains transparency. Ensure the contrast ratio between the text and background are at least {{required}}:1.",
    "1_4_3_G18_or_G145.Fail": "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.",
    "1_4_3_G18_or_G145.Fail.Recomendation": "Recommendation: change",
    "1_4_3_G18_or_G145.Fail.Recomendation.Text": "text colour to",
    "1_4_3_G18_or_G145.Fail.Recomendation.Background": "background to",
    "1_4_4_G142": "Check that text can be resized without assistive technology up to 200 percent without loss of content or functionality.",
    "1_4_5_G140,C22,C30.AALevel": "If the technologies being used can achieve the visual presentation, check that text is used to convey information rather than images of text, except when the image of text is essential to the information being conveyed, or can be visually customised to the user's requirements.",
    "1_4_6_G18_or_G17.Abs": "This element is absolutely positioned and the background color can not be determined. Ensure the contrast ratio between the text and all covered parts of the background are at least {{required}}:1.",
    "1_4_6_G18_or_G17.BgImage": "This element's text is placed on a background image. Ensure the contrast ratio between the text and all covered parts of the image are at least {{required}}:1.",
    "1_4_6_G18_or_G17.Fail": "This element has insufficient contrast at this conformance level. Expected a contrast ratio of at least {{required}}:1, but text in this element has a contrast ratio of {{value}}:1.",
    "1_4_6_G18_or_G17.Fail.Recomendation": "Recommendation: change",
    "1_4_6_G18_or_G17.Fail.Recomendation.Text": "text colour to",
    "1_4_6_G18_or_G17.Fail.Recomendation.Background": "background to",
    "1_4_7_G56": "For pre-recorded audio-only content in this element that is primarily speech (such as narration), any background sounds should be muteable, or be at least 20 dB (or about 4 times) quieter than the speech.",
    "1_4_8_G148,G156,G175": "Check that a mechanism is available for the user to select foreground and background colours for blocks of text, either through the Web page or the browser.",
    "1_4_8_H87,C20": "Check that a mechanism exists to reduce the width of a block of text to no more than 80 characters (or 40 in Chinese, Japanese or Korean script).",
    "1_4_8_C19,G172,G169": "Check that blocks of text are not fully justified - that is, to both left and right edges - or a mechanism exists to remove full justification.",
    "1_4_8_G188,C21": "Check that line spacing in blocks of text are at least 150% in paragraphs, and paragraph spacing is at least 1.5 times the line spacing, or that a mechanism is available to achieve this.",
    "1_4_8_H87,G146,C26": "Check that text can be resized without assistive technology up to 200 percent without requiring the user to scroll horizontally on a full-screen window.",
    "1_4_9_G140,C22,C30.NoException": "Check that images of text are only used for pure decoration or where a particular presentation of text is essential to the information being conveyed.",
    "2_1_1_G90": "Ensure the functionality provided by an event handler for this element is available through the keyboard",
    "2_1_1_SCR20.DblClick": "Ensure the functionality provided by double-clicking on this element is available through the keyboard.",
    "2_1_1_SCR20.MouseOver": "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.",
    "2_1_1_SCR20.MouseOut": "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.",
    "2_1_1_SCR20.MouseMove": "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.",
    "2_1_1_SCR20.MouseDown": "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.",
    "2_1_1_SCR20.MouseUp": "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.",
    "2_1_2_F10": "Check that this applet or plugin provides the ability to move the focus away from itself when using the keyboard.",
    "2_2_1_F40.2": "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.",
    "2_2_1_F41.2": "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.",
    "2_2_2_SCR33,SCR22,G187,G152,G186,G191": "If any part of the content moves, scrolls or blinks for more than 5 seconds, or auto-updates, check that there is a mechanism available to pause, stop, or hide the content.",
    "2_2_2_F4": "Ensure there is a mechanism available to stop this blinking element in less than five seconds.",
    "2_2_2_F47": "Blink elements cannot satisfy the requirement that blinking information can be stopped within five seconds.",
    "2_2_3_G5": "Check that timing is not an essential part of the event or activity presented by the content, except for non-interactive synchronized media and real-time events.",
    "2_2_4_SCR14": "Check that all interruptions (including updates to content) can be postponed or suppressed by the user, except interruptions involving an emergency.",
    "2_2_5_G105,G181": "If this Web page is part of a set of Web pages with an inactivity time limit, check that an authenticated user can continue the activity without loss of data after re-authenticating.",
    "2_3_1_G19,G176": "Check that no component of the content flashes more than three times in any 1-second period, or that the size of any flashing area is sufficiently small.",
    "2_3_2_G19": "Check that no component of the content flashes more than three times in any 1-second period.",
    "2_4_1_H64.1": "Iframe element requires a non-empty title attribute that identifies the frame.",
    "2_4_1_H64.2": "Check that the title attribute of this element contains text that identifies the frame.",
    "2_4_1_G1,G123,G124,H69": "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.",
    "2_4_1_G1,G123,G124.NoSuchID": 'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name.',
    "2_4_1_G1,G123,G124.NoSuchIDFragment": 'This link points to a named anchor "{{id}}" within the document, but no anchor exists with that name in the fragment tested.',
    "2_4_2_H25.1.NoHeadEl": "There is no head section in which to place a descriptive title element.",
    "2_4_2_H25.1.NoTitleEl": "A title should be provided for the document, using a non-empty title element in the head section.",
    "2_4_2_H25.1.EmptyTitle": "The title element in the head section should be non-empty.",
    "2_4_2_H25.2": "Check that the title element describes the document.",
    "2_4_3_H4.2": "If tabindex is used, check that the tab order specified by the tabindex attributes follows relationships in the content.",
    "2_4_4_H77,H78,H79,H80,H81,H33": "Check that the link text combined with programmatically determined link context, or its title attribute, identifies the purpose of the link.",
    "2_4_4_H77,H78,H79,H80,H81": "Check that the link text combined with programmatically determined link context identifies the purpose of the link.",
    "2_4_5_G125,G64,G63,G161,G126,G185": "If this Web page is not part of a linear process, check that there is more than one way of locating this Web page within a set of Web pages.",
    "2_4_6_G130,G131": "Check that headings and labels describe topic or purpose.",
    "2_4_7_G149,G165,G195,C15,SCR31": "Check that there is at least one mode of operation where the keyboard focus indicator can be visually located on user interface controls.",
    "2_4_8_H59.1": "Link elements can only be located in the head section of the document.",
    "2_4_8_H59.2a": "Link element is missing a non-empty rel attribute identifying the link type.",
    "2_4_8_H59.2b": "Link element is missing a non-empty href attribute pointing to the resource being linked.",
    "2_4_9_H30": "Check that text of the link describes the purpose of the link.",
    "3_1_1_H57.2": "The html element should have a lang or xml:lang attribute which describes the language of the document.",
    "3_1_1_H57.3.Lang": "The language specified in the lang attribute of the document element does not appear to be well-formed.",
    "3_1_1_H57.3.XmlLang": "The language specified in the xml:lang attribute of the document element does not appear to be well-formed.",
    "3_1_2_H58": "Ensure that any change in language is marked using the lang and/or xml:lang attribute on an element, as appropriate.",
    "3_1_2_H58.1.Lang": "The language specified in the lang attribute of this element does not appear to be well-formed.",
    "3_1_2_H58.1.XmlLang": "The language specified in the xml:lang attribute of this element does not appear to be well-formed.",
    "3_1_3_H40,H54,H60,G62,G70": "Check that there is a mechanism available for identifying specific definitions of words or phrases used in an unusual or restricted way, including idioms and jargon.",
    "3_1_4_G102,G55,G62,H28,G97": "Check that a mechanism for identifying the expanded form or meaning of abbreviations is available.",
    "3_1_5_G86,G103,G79,G153,G160": "Where the content requires reading ability more advanced than the lower secondary education level, supplemental content or an alternative version should be provided.",
    "3_1_6_H62.1.HTML5": "Ruby element does not contain an rt element containing pronunciation information for its body text.",
    "3_1_6_H62.1.XHTML11": "Ruby element does not contain an rt element containing pronunciation information for the text inside the rb element.",
    "3_1_6_H62.2": "Ruby element does not contain rp elements, which provide extra punctuation to browsers not supporting ruby text.",
    "3_2_1_G107": "Check that a change of context does not occur when this input field receives focus.",
    "3_2_2_H32.2": 'This form does not contain a submit button, which creates issues for those who cannot submit the form using the keyboard. Submit buttons are INPUT elements with type attribute "submit" or "image", or BUTTON elements with type "submit" or omitted/invalid.',
    "3_2_3_G61": "Check that navigational mechanisms that are repeated on multiple Web pages occur in the same relative order each time they are repeated, unless a change is initiated by the user.",
    "3_2_4_G197": "Check that components that have the same functionality within this Web page are identified consistently in the set of Web pages to which it belongs.",
    "3_2_5_H83.3": "Check that this link's link text contains information indicating that the link will open in a new window.",
    "3_3_1_G83,G84,G85": "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.",
    "3_3_2_G131,G89,G184,H90": "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.",
    "3_3_3_G177": "Check that this form provides suggested corrections to errors in user input, unless it would jeopardize the security or purpose of the content.",
    "3_3_4_G98,G99,G155,G164,G168.LegalForms": "If this form would bind a user to a financial or legal commitment, modify/delete user-controllable data, or submit test responses, ensure that submissions are either reversible, checked for input errors, and/or confirmed by the user.",
    "3_3_5_G71,G184,G193": "Check that context-sensitive help is available for this form, at a Web-page and/or control level.",
    "3_3_6_G98,G99,G155,G164,G168.AllForms": "Check that submissions to this form are either reversible, checked for input errors, and/or confirmed by the user.",
    "4_1_1_F77": 'Duplicate id attribute value "{{id}}" found on the web page.',
    "4_1_2_H91.A.Empty": "Anchor element found with an ID but without a href or link text. Consider moving its ID to a parent or nearby element.",
    "4_1_2_H91.A.EmptyWithName": "Anchor element found with a name attribute but without a href or link text. Consider moving the name attribute to become an ID of a parent or nearby element.",
    "4_1_2_H91.A.EmptyNoId": "Anchor element found with no link content and no name and/or ID attribute.",
    "4_1_2_H91.A.NoHref": "Anchor elements should not be used for defining in-page link targets. If not using the ID for other purposes (such as CSS or scripting), consider moving it to a parent element.",
    "4_1_2_H91.A.Placeholder": "Anchor element found with link content, but no href, ID or name attribute has been supplied.",
    "4_1_2_H91.A.NoContent": "Anchor element found with a valid href attribute, but no link content has been supplied.",
    "4_1_2_input_element": "input element",
    "4_1_2_role_of_button": 'element has a role of "button" but',
    "4_1_2_element_content": "element content",
    "4_1_2_element": "element",
    "4_1_2_msg_pattern": "This {{msgNodeType}} does not have a name available to an accessibility API. Valid names are: {{builtAttrs}}.",
    "4_1_2_msg_pattern2": "This {{msgNodeType}} does not have a value available to an accessibility API.",
    "4_1_2_msg_add_one": "Add one by adding content to the element.",
    "4_1_2_msg_pattern3": "This {{msgNodeType}} does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.",
    "4_1_2_value_exposed_using_attribute": "A value is exposed using the {{requiredValue}} attribute.",
    "4_1_2_value_exposed_using_element": "A value is exposed using the {{requiredValue}} element."
};

_global.translation["ja"] = {
    auditor_name: "HTML_CodeSniffer",
    auditor_using_standard: "Using standard",
    auditor_standards: "適合レベル",
    auditor_code_snippet: "コードスニペット",
    auditor_close: "閉じる",
    auditor_select_types: "レポートに含める報告の種類を選択してください",
    auditor_home: "ホーム",
    auditor_view_report: "レポートをみる",
    auditor_report: "レポート",
    auditor_back_to_report: "レポートに戻る",
    auditor_previous_issue: "前の報告",
    auditor_next_issue: "次の報告",
    auditor_issue: "報告",
    auditor_of: "/",
    auditor_errors: "エラー",
    auditor_error: "エラー",
    auditor_warnings: "警告",
    auditor_warning: "警告",
    auditor_notices: "通知",
    auditor_notice: "通知",
    auditor_toggle_display_of: "Toggle display of",
    auditor_messages: "メッセージ",
    auditor_unable_to_point: "この報告に関係する要素の位置を特定できません。",
    auditor_unable_to_point_entire: "この報告はドキュメント全体に関係するため、問題の位置を特定できません。",
    auditor_unable_to_point_removed: "この要素はレポート作成後に削除されたため、要素の位置を特定できません。",
    auditor_unable_to_point_outside: "この要素はドキュメントボディの外に位置するため、要素の位置を特定できません。",
    auditor_unable_to_point_hidden: "この要素はビューから隠れているか、視覚表現をもたないため、要素の位置を特定できません。",
    auditor_point_to_element: "要素の位置を特定",
    auditor_unsupported_browser: "このコードスニペットの機能は、このブラウザでサポートされていません。",
    auditor_page: "ページ",
    auditor_updated_to: "HTML_CodeSniffer のバージョンがアップデートされました",
    auditor_view_the_changelog: "更新履歴をみる",
    auditor_success_criterion: "成功基準",
    auditor_suggested_techniques: "推奨される手法",
    auditor_applies_entire_document: "これはドキュメント全体に適用されます",
    "1_1_1_H30.2": "img 要素がこのリンクの唯一のコンテンツですが、 alt テキストがありません。 alt テキストがリンクの目的を説明するべきです。",
    "1_1_1_H67.1": "空の alt テキストをもつ img 要素は title 属性をもたないか、または、空でなければなりません。",
    "1_1_1_H67.2": "img 要素は支援技術に無視されるようマークアップされています。",
    "1_1_1_H37": "Img 要素に alt 属性が不足しています。 alt 属性で短い代替テキストを明示してください。",
    "1_1_1_G94.Image": "img 要素 の alt テキストが、この画像と同じ目的や情報を提供していることを確認してください。",
    "1_1_1_H36": "画像による送信ボタンに alt 属性が不足しています。このボタンの機能を説明する代替テキストを alt 属性で明示してください。",
    "1_1_1_G94.Button": "画像による送信ボタンの代替テキストがそのボタンの目的を特定していることを確認してください。",
    "1_1_1_H24": "イメージマップのArea 要素に alt 属性が不足しています。各 area 要素は、そのイメージマップエリアの機能を説明する代替テキストを持たなければなりません。",
    "1_1_1_H24.2": "area 要素の代替テキストが、参照するイメージマップ画像の部分と同じ目的を提供していることを確認してください。",
    "1_1_1_G73,G74": "もし短い代替テキストでこのイメージが十分に説明できないなら、ボディテキストやリンクなどを通じて長い代替テキストを提供してください。",
    "1_1_1_H2.EG5": "リンク内の img 要素は 代替テキストにリンクのコンテンツのテキストの複製を使用してはなりません。",
    "1_1_1_H2.EG4": "テキストリンクと隣り合うリンク内の img 要素の alt 属性が指定されていないか空になっています。テキストと画像のリンクを一つにまとめることを検討してください。",
    "1_1_1_H2.EG3": "テキストリンクと隣り合うリンク内の img 要素の alt 属性にテキストリンクの内容の複製を使用してはいけません。",
    "1_1_1_H53,ARIA6": "他のすべての選択肢が尽きた後は、 object 要素に代替テキストを含める必要があります。",
    "1_1_1_G94,G92.Object,ARIA6": "短い（適切な場合は長い）代替テキストが、同じ目的を果たし同じ情報を提示する非テキストコンテンツに対して提供されていることを確認してください。",
    "1_1_1_H35.3": "applet 要素をサポートしていないブラウザでは、 applet 要素の要素本文に代替テキストを含める必要があります。",
    "1_1_1_H35.2": "applet 要素をサポートしているがロードできないブラウザに対して代替テキストを提供するために、 applet 要素は alt 属性を含まなければなりません。",
    "1_1_1_G94,G92.Applet": "非テキストコンテンツに対して、同じ目的を果たし、かつ同じ情報を示す短い（適切な場合は長い）代替テキストが提供されていることを確認してください。",
    "1_2_1_G158": "この埋め込みオブジェクトに録音済みの音声のみが含まれていて、テキストコンテンツの代替として提供されていない場合は、代替テキストバージョンが利用可能であることを確認してください。",
    "1_2_1_G159,G166": "この埋め込みオブジェクトに録画済みの映像のみが含まれており、テキストコンテンツの代替として提供されていない場合は、代替テキストバージョンが利用可能であるか、同等の情報を示す音声トラックが提供されていることを確認してください。",
    "1_2_2_G87,G93": "この埋め込みオブジェクトに事前に記録された同期したメディアが含まれており、テキストコンテンツの代替として提供されていない場合は、音声コンテンツ用のキャプションが提供されていることを確認してください",
    "1_2_3_G69,G78,G173,G8": "この埋め込みオブジェクトに事前に記録された同期したメディアが含まれていて、テキストコンテンツの代替として提供されていない場合は、その映像の音声説明および/またはコンテンツの代替テキストバージョンが提供されていることを確認してください。",
    "1_2_4_G9,G87,G93": "この埋め込みオブジェクトに同期したメディアが含まれている場合は、ライブの音声コンテンツにキャプションが提供されていることを確認してください。",
    "1_2_5_G78,G173,G8": "この埋め込みオブジェクトに事前に記録された同期したメディアが含まれている場合は、その映像コンテンツに音声の説明があることを確認してください。",
    "1_2_6_G54,G81": "この埋め込みオブジェクトに記録済みの同期したメディアが含まれている場合は、その音声に手話の解釈が提供されていることを確認してください。",
    "1_2_7_G8": "この埋め込みオブジェクトに同期したメディアが含まれていて、前景音の一時停止による音声解説が収録済映像の意味を伝えるのに不十分な場合、スクリプトまたは代替バージョンで拡張音声解説が提供させていることを確認してください。",
    "1_2_8_G69,G159": "この埋め込みオブジェクトに事前に記録された同期したメディアまたは映像のみのコンテンツが含まれている場合は、コンテンツの代替テキストバージョンが提供されていることを確認してください。",
    "1_2_9_G150,G151,G157": "この埋め込みオブジェクトにライブの音声のみのコンテンツが含まれている場合は、そのコンテンツの代替テキストバージョンが提供されていることを確認してください。",
    "1_3_1_F92,ARIA4": 'この要素の役割は"プレゼンテーション"ですが、セマンティックな意味を持つ子要素を含みます。',
    "1_3_1_H44.NonExistent": 'このラベルの "for" 属性に、ドキュメントに存在しない ID が含まれています。',
    "1_3_1_H44.NonExistentFragment": 'このラベルの "for" 属性に、ドキュメントフラグメントに存在しない ID が含まれています。',
    "1_3_1_H44.NotFormControl": 'このラベルの "for" 属性には、フォームコントロールでない要素の ID が含まれています。目的の要素に正しい ID を入力していることを確認してください。',
    "1_3_1_H65": 'このフォームコントロールには、空またはスペースのみを含む "title" 属性があります。ラベリングテストの目的では無視されます。',
    "1_3_1_ARIA6": 'このフォームコントロールには、空またはスペースのみを含む "aria-label" 属性があります。ラベリングテストの目的では無視されます。',
    "1_3_1_ARIA16,ARIA9": 'このフォームコントロールには aria-labelledby 属性が含まれていますが、要素には存在しないID "{{id}}" が含まれています。 aria-labelledby 属性はラベリングテストの目的では無視されます。',
    "1_3_1_F68.Hidden": "この hidden のフォームフィールドには何らかの方法でラベルが付けられています。 hidden のフォームフィールドにラベルを付ける必要はありません。",
    "1_3_1_F68.HiddenAttr": 'このフォームフィールドは（ "hidden" 属性を使用して）非表示にすることを目的としていますが、何らかの方法でラベル付けされています。隠しフォームフィールドにラベルを付ける必要はありません。',
    "1_3_1_F68": 'このフォームフィールドは何らかの方法でラベル付けされるべきです。 label 要素（ "for" 属性を持つかフォームフィールドを囲む）、または "title"、 "aria-label" 、または "aria-labelledby" 属性を適切に使用してください。',
    "1_3_1_H49.": "HTML5では時代遅れになっているプレゼンテーションマークアップが使用されています。",
    "1_3_1_H49.AlignAttr": "属性を揃えます",
    "1_3_1_H49.Semantic": "強調テキストまたは特殊テキストには、プログラム的に決定できるようセマンティックマークアップが使用されるべきです。",
    "1_3_1_H49.AlignAttr.Semantic": "強調テキストまたは特殊テキストには、プログラム的に決定できるようセマンティックマークアップが使用されるべきです。",
    "1_3_1_H42": "このコンテンツが見出しとして意図されている場合は、見出しマークアップを使用する必要があります。",
    "1_3_1_H63.3": "テーブルセルに無効な scope 属性があります。有効な値は、 row 、 col 、 rowgroup 、または colgroup です。",
    "1_3_1_H63.2": "他の要素の見出しとして機能する td 要素のスコープ属性は、HTML5では廃止されました。代わりに th 要素を使用してください。",
    "1_3_1_H43.ScopeAmbiguous": "複数のレベルの見出しを持つテーブルでは、 th 要素のスコープ属性はあいまいです。代わりに td 要素の headers 属性を使用してください。",
    "1_3_1_H43.IncorrectAttr": 'この td 要素のヘッダー属性が正しくありません。 "{{expected}}" を予期していましたが、 "{{actual}}" を検出しました',
    "1_3_1_H43.IncorrectAttrNotice": "Check that headers attribute on td element is correct.",
    "1_3_1_H43.HeadersRequired": "td 要素とそれに関連する th 要素の関係は定義されていません。このテーブルには複数レベルの th 要素があるため、 td 要素には headers 属性を使用する必要があります。",
    "1_3_1_H43.MissingHeaderIds": "このテーブルに id 属性を含まない th 要素があります。これらのセルは、それらが td 要素の headers 属性によって参照されるように ID を含むべきです。",
    "1_3_1_H43.MissingHeadersAttrs": "このテーブルに headers 属性を含まない td 要素があります。各 headers 属性は、そのセルに関連付けられているすべての th 要素の ID を列挙する必要があります。",
    "1_3_1_H43,H63": "td 要素とそれに関連する th 要素の関係は定義されていません。 th 要素に scope 属性を使用するか、td 要素に headers 属性を使用してください。",
    "1_3_1_H63.1": "このテーブルに scope 属性をもたない th 要素があります。これらのセルは、 td 要素との関連を識別するための scope 属性を含むべきです。",
    "1_3_1_H73.3.LayoutTable": "このテーブルはレイアウトに使用されているように見えますが、 summary 属性が含まれています。レイアウトテーブルに summary 属性を含めないか、または、指定されている場合は空にしてください。",
    "1_3_1_H39,H73.4": "このテーブルがデータテーブルで、 summary 属性と caption 要素の両方が存在する場合、 summary は caption を複製しないでください。",
    "1_3_1_H73.3.Check": "このテーブルがデータテーブルである場合は、 summary 属性がテーブルの構成を説明していること、またはテーブルの使用方法を説明していることを確認してください。",
    "1_3_1_H73.3.NoSummary": "このテーブルがデータテーブルの場合は、 table 要素の summary 属性を使用してこのテーブルの概要を説明してください。",
    "1_3_1_H39.3.LayoutTable": "このテーブルはレイアウトに使用されているように見えますが、 caption 要素が含まれています。レイアウトテーブルに caption を含めることはできません。",
    "1_3_1_H39.3.Check": "このテーブルがデータテーブルの場合は、 caption 要素がこのテーブルを正確に記述していることを確認してください。",
    "1_3_1_H39.3.NoCaption": "このテーブルがデータテーブルである場合は、このテーブルを識別するために table 要素に caption 要素を使用することを検討してください。",
    "1_3_1_H71.NoLegend": "フィールドセットに legend 要素が含まれていません。すべてのフィールドセットには、フィールドグループの説明を記述する legend 要素を含める必要があります。",
    "1_3_1_H85.2": "この選択リストに関連オプションのグループが含まれている場合は、それらを optgroup とグループ化する必要があります。",
    "1_3_1_H71.SameName": "これらのラジオボタンまたはチェックボックスにさらにグループレベルの説明が必要な場合は、それらを fieldset 要素に含める必要があります。",
    "1_3_1_H48.1": "このコンテンツは、プレーンテキストを使用して番号なしリストをシミュレートしているように見えます。もしそうなら、 ul 要素でこの内容をマークアップすることで文書に適切な構造情報を追加します。",
    "1_3_1_H48.2": "このコンテンツは、プレーンテキストを使用して番号付きリストをシミュレートしているように見えます。もしそうなら、 ol 要素でこの内容をマークアップすることで文書に適切な構造情報を追加します。",
    "1_3_1_G141_a": "見出し構造が論理的にネストされていません。この h{{headingNum}} 要素は主な文書見出しであるようにみえるため、 h1 要素であるべきです。",
    "1_3_1_G141_b": "見出し構造が論理的にネストされていません。適切にネストするには、この h{{headingNum}} 要素を h{{properHeadingNum}} にする必要があります。",
    "1_3_1_H42.2": "見出しタグがコンテンツなしで見つかりました。見出しとして意図されていないテキストは、見出しタグでマークアップしてはいけません。",
    "1_3_1_H48": "この要素にナビゲーションセクションが含まれる場合は、リストとしてマークアップすることを推奨します。",
    "1_3_1_LayoutTable": "このテーブルはレイアウトテーブルのようにみえます。もしデータテーブルであることを意図している場合、 th 要素を使用することでヘッダーセルが識別されるようにしてください。",
    "1_3_1_DataTable": "このテーブルはデータテーブルのようにみえます。もしレイアウトテーブルであることを意図している場合は、 th 要素がないこと、および summary または caption がないことを確認してください。",
    "1_3_2_G57": "スタイルシートが無効になっている場合など、線形化されたときにコンテンツが意味のある順序で並べられていることを確認してください。",
    "1_3_3_G96": "コンテンツを理解するための説明が提供されている場合は、オブジェクトを説明するために（形状、サイズ、場所などの）感覚的な特性だけに頼らないでください。",
    "1_4_1_G14,G18": "色だけを使って伝えられる情報がテキストや他の視覚的な手がかりを通しても利用可能であることを確認してください。",
    "1_4_2_F23": "この要素に3秒を超えて自動再生される音声が含まれている場合は、音声を一時停止、停止、またはミュートする機能があることを確認してください。",
    "1_4_3_F24.BGColour": "この要素に継承された前景色があり、対応するインラインの背景色または画像を引き立てていることを確認してください。",
    "1_4_3_F24.FGColour": "この要素に継承された背景色または画像があり、対応するインラインの前景色を引き立てていることを確認してください。",
    "1_4_3_G18_or_G145.Abs": "この要素は絶対位置に配置されているため、背景色を決定できません。テキストと背景の覆われた部分すべてのコントラスト比が少なくとも{{required}}:1であることを確認してください。",
    "1_4_3_G18_or_G145.BgImage": "この要素のテキストは背景画像に配置されます。テキストと画像の覆われている部分すべてのコントラスト比が少なくとも{{required}}:1であることを確認してください。",
    "1_4_3_G18_or_G145.Alpha": "この要素のテキストまたは背景は透明部分を含みます。テキストと背景のコントラスト比が少なくとも{{required}}:1であることを確認してください。",
    "1_4_3_G18_or_G145.Fail": "この要素は、この適合レベルではコントラストが不十分です。少なくとも{{required}}:1のコントラスト比が必要ですが、この要素のテキストのコントラスト比は{{value}}:1です。",
    "1_4_3_G18_or_G145.Fail.Recomendation": "推奨: ",
    "1_4_3_G18_or_G145.Fail.Recomendation.Text": "文字色を{{value}}に変更する",
    "1_4_3_G18_or_G145.Fail.Recomendation.Background": "背景を{{value}}に変更する",
    "1_4_4_G142": "コンテンツや機能を損なうことなく、支援技術なしでテキストを200パーセントまでリサイズできることを確認してください。",
    "1_4_5_G140,C22,C30.AALevel": "使用している技術で意図した視覚的提示が可能である場合、文字画像ではなくテキストが情報伝達に用いられているか確認してください。ただし、文字画像が、伝えようとする情報にとって必要不可欠であるか、または、利用者の要求に応じて視覚的にカスタマイズできる場合を除きます。",
    "1_4_6_G18_or_G17.Abs": "この要素は絶対位置に配置されているため、背景色を決定できません。テキストと背景の覆われた部分すべてのコントラスト比が少なくとも{{required}}:1であることを確認してください。",
    "1_4_6_G18_or_G17.BgImage": "この要素のテキストは背景画像に配置されます。テキストと画像の覆われている部分すべてのコントラスト比が少なくとも{{required}}:1であることを確認してください。",
    "1_4_6_G18_or_G17.Fail": "この要素は、この適合レベルではコントラストが不十分です。少なくとも{{required}}:1のコントラスト比が必要ですが、この要素のテキストのコントラスト比は{{value}}:1です。",
    "1_4_6_G18_or_G17.Fail.Recomendation": "推奨: ",
    "1_4_6_G18_or_G17.Fail.Recomendation.Text": "文字色を{{value}}に変更する",
    "1_4_6_G18_or_G17.Fail.Recomendation.Background": "背景を{{value}}に変更する",
    "1_4_7_G56": "主に（ナレーションなどの）スピーチである要素内の事前録音された音声のみのコンテンツでは、背景音はミュート可能であるか、またはスピーチより少なくとも20dB（または約4倍）静かである必要があります。",
    "1_4_8_G148,G156,G175": "ウェブページまたはブラウザを介して、ユーザーがテキストブロックの前景色と背景色を選択できるメカニズムがあることを確認してください。",
    "1_4_8_H87,C20": "テキストブロックの幅を80文字以下（中国語、日本語、または韓国語のスクリプトでは40文字以下）に縮小するメカニズムが存在することを確認してください。",
    "1_4_8_C19,G172,G169": "テキストブロックが両端揃えされていないこと、または両端揃えを削除するためのメカニズムが存在することを確認してください。",
    "1_4_8_G188,C21": "テキストブロック内の行間隔が段落内で少なくとも150％であり、段落間隔が行間隔の少なくとも1.5倍であること、またはこれを達成するためのメカニズムが使用可能であることを確認してください。",
    "1_4_8_H87,G146,C26": "ユーザーがフルスクリーンウィンドウ上で水平にスクロールすることを必要とせずに、支援技術なしでテキストを200パーセントまでリサイズできることを確認してください。",
    "1_4_9_G140,C22,C30.NoException": "テキストのイメージが純粋な装飾のためか、または、伝えられる情報にテキストの特定の表現が不可欠である場合にだけ使われているか確認してください。",
    "2_1_1_G90": "この要素のイベントハンドラによって提供される機能がキーボードから利用可能であることを確認してください。",
    "2_1_1_SCR20.DblClick": "この要素をダブルクリックすることで提供される機能がキーボードから利用可能であることを確認してください。",
    "2_1_1_SCR20.MouseOver": "この要素の上にマウスを置くことで提供される機能がキーボードから利用可能であることを確認してください。たとえば、フォーカスイベントの使用などです。",
    "2_1_1_SCR20.MouseOut": "この要素からマウスを外すことによって提供される機能がキーボードを通して利用可能であることを確認してください。たとえば、 blur イベントの使用などです。",
    "2_1_1_SCR20.MouseMove": "この要素上でマウスを動かすことによって提供される機能がキーボードを通して利用可能であることを確認してください。",
    "2_1_1_SCR20.MouseDown": "この要素をマウスオーバーすることで提供される機能がキーボードから利用可能であることを確認してください。たとえば、 keydown イベントの使用などです。",
    "2_1_1_SCR20.MouseUp": "この要素にマウスを合わせることで提供される機能がキーボードから利用可能であることを確認してください。たとえば、 keyup イベントの使用などです。",
    "2_1_2_F10": "このアプレットまたはプラグインが、キーボードを使用しているときにフォーカスをそれ自体から遠ざける機能を提供することを確認してください。",
    "2_2_1_F40.2": "別のページにリダイレクトするために使用される Meta リフレッシュタグの制限時間が0ではありません。ユーザーはこの制限時間を制御できません。",
    "2_2_1_F41.2": "現在のページを更新するために meta リフレッシュタグが使用されています。ユーザーはこの更新の制限時間を制御できません。",
    "2_2_2_SCR33,SCR22,G187,G152,G186,G191": "コンテンツの一部が5秒より長く移動、スクロール、点滅、または自動更新される場合は、コンテンツを一時停止、停止、非表示にできるメカニズムがあることを確認してください。",
    "2_2_2_F4": "この点滅している要素を5秒以内に止めることができるメカニズムがあることを確認してください。",
    "2_2_2_F47": "blink 要素は、点滅情報を5秒以内に停止できるという要件を満たせません。",
    "2_2_3_G5": "タイミングがコンテンツによって提示されるイベントまたはアクティビティの重要な部分でないことを確認してください。ただし、インタラクティブでない同期したメディアおよびリアルタイムイベントを除きます。",
    "2_2_4_SCR14": "緊急時の中断を除いて、すべての中断（コンテンツの更新を含む）がユーザーによって延期または抑制できることを確認してください。",
    "2_2_5_G105,G181": "このウェブページが無活動時間制限のある一連のウェブページの一部である場合は、認証されたユーザーが再認証後にデータを失うことなくアクティビティを続行できることを確認してください。",
    "2_3_1_G19,G176": "コンテンツのすべてのコンポーネントが、どの1秒間においても3回を超えて点滅していないこと、または点滅している領域のサイズが十分に小さいことを確認してください。",
    "2_3_2_G19": "コンテンツのすべてのコンポーネントが、どの1秒間においても3回を超えて点滅していないことを確認してください。",
    "2_4_1_H64.1": "iframe 要素には、フレームを識別する空でない title 属性が必要です。",
    "2_4_1_H64.2": "この要素の title 属性にフレームを識別するテキストが含まれていることを確認してください。",
    "2_4_1_G1,G123,G124,H69": "一般的なナビゲーション要素はすべて迂回できることを確認してください。例えば、スキップリンク、ヘッダ要素、または ARIA ランドマークを使用します。",
    "2_4_1_G1,G123,G124.NoSuchID": 'このリンクはドキュメント内の名前付きアンカー "{{id}}" を指していますが、その名前のアンカーは存在しません。',
    "2_4_1_G1,G123,G124.NoSuchIDFragment": 'このリンクはドキュメント内の名前付きアンカー "{{id}}" を指していますが、テストされたフラグメント内にその名前のアンカーは存在しません。',
    "2_4_2_H25.1.NoHeadEl": "説明的な title 要素を配置するための head セクションがありません。",
    "2_4_2_H25.1.NoTitleEl": "head セクションの空でない title 要素を使って、文書にタイトルをつけるべきです。",
    "2_4_2_H25.1.EmptyTitle": "head セクションの title 要素が空ではありません。",
    "2_4_2_H25.2": "title 要素が文書を説明していることを確認してください。",
    "2_4_3_H4.2": "tabindex が使用されている場合は、 tabindex 属性で指定されたタブ順序がコンテンツ内の関係に従っていることを確認してください。",
    "2_4_4_H77,H78,H79,H80,H81,H33": "プログラムで解釈されるリンクのコンテキストまたはその title 属性と組み合わせたときに、リンクテキストからリンクの目的が判断できることを確認してください。",
    "2_4_4_H77,H78,H79,H80,H81": "プログラムで解釈されるリンクのコンテキストと組み合わせたときに、リンクテキストからリンクの目的が判断できることを確認してください。",
    "2_4_5_G125,G64,G63,G161,G126,G185": "このウェブページが一連のプロセスの一部でない場合は、ウェブページ一式の中でこのウェブページを見つける方法が複数あることを確認してください。",
    "2_4_6_G130,G131": "見出しとラベルがトピックや目的を説明していることを確認してください。",
    "2_4_7_G149,G165,G195,C15,SCR31": "キーボードフォーカスのインジケータをユーザーインターフェイス操作子に視覚的に配置できる操作モードが少なくとも1つあることを確認してください。",
    "2_4_8_H59.1": "link 要素はドキュメントのヘッドセクションにのみ配置できます。",
    "2_4_8_H59.2a": "link 要素に、リンクタイプを識別する空でない rel 属性がありません。",
    "2_4_8_H59.2b": "link 要素に、リンクされているリソースを指す空でない href 属性がありません。",
    "2_4_9_H30": "リンクテキストがリンクの目的を説明していることを確認してください。",
    "3_1_1_H57.2": "html 要素には、ドキュメントの言語を記述する lang 属性または xml:lang 属性を含める必要があります。",
    "3_1_1_H57.3.Lang": "document 要素の lang 属性に指定されている言語が整形式ではないようです。",
    "3_1_1_H57.3.XmlLang": "document 要素の xml:lang 属性に指定されている言語が整形式ではないようです。",
    "3_1_2_H58": "言語の変更が、要素の lang 属性または xml:lang 属性、あるいはその両方を使用して適切にマークアップされていることを確認してください。",
    "3_1_2_H58.1.Lang": "この要素の lang 属性に指定されている言語は、整形式ではないようです。",
    "3_1_2_H58.1.XmlLang": "この要素の xml:lang 属性に指定されている言語は、整形式ではないようです。",
    "3_1_3_H40,H54,H60,G62,G70": "慣用句や専門用語を含む、特殊または制限された用法の単語やフレーズの特定の定義を識別するためのメカニズムが利用可能であることを確認してください。",
    "3_1_4_G102,G55,G62,H28,G97": "展開形式または略語の意味を識別するためのメカニズムが利用可能であることを確認してください。",
    "3_1_5_G86,G103,G79,G153,G160": "コンテンツが中等教育レベルよりも高度な読解力を必要とする場合は、補足的なコンテンツまたは代替バージョンを提供する必要があります。",
    "3_1_6_H62.1.HTML5": "ruby 要素が、本文の発音情報を含む rt 要素を含んでいません。",
    "3_1_6_H62.1.XHTML11": "ruby 要素が、 rb 要素内のテキストの発音情報を含む rt 要素を含んでいません。",
    "3_1_6_H62.2": "ruby 要素に rp 要素が含まれていません。これは、ルビテキストをサポートしていないブラウザに余分な句読点を提供します。",
    "3_2_1_G107": "この入力フィールドがフォーカスを受けたときにコンテキストの変更が起こらないことを確認してください。",
    "3_2_2_H32.2": 'このフォームには送信ボタンがありません。キーボードを使用してフォームを送信できないユーザーに問題が発生します。送信ボタンは、 type 属性が "submit" または "image" の INPUT 要素、またはタイプが "submit" または省略/無効の BUTTON 要素です。',
    "3_2_3_G61": "複数のウェブページ上で繰り返されているナビゲーションのメカニズムは、繰り返されるたびに相対的に同じ順序で出現することを確認してください。ただし、利用者が変更した場合を除きます。",
    "3_2_4_G197": "このウェブページ内で同じ機能を有するコンポーネントが、それが属するウェブページ一式の中で一貫して識別できることを確認してください。",
    "3_2_5_H83.3": "このリンクのリンクテキストに、リンクが新しいウィンドウで開くことを示す情報が含まれていることを確認してください。",
    "3_3_1_G83,G84,G85": "この形式で入力エラーが自動的に検出された場合は、エラーのある項目が識別され、エラーがテキストでユーザーに説明されていることを確認してください。",
    "3_3_2_G131,G89,G184,H90": "このフォームのユーザー入力に説明ラベルまたは説明（必須フィールドを含む）が指定されていることを確認してください。",
    "3_3_3_G177": "コンテンツのセキュリティや目的を損なうことがない限り、このフォームがユーザー入力の誤りに対する推奨される修正を提供することを確認してください。",
    "3_3_4_G98,G99,G155,G164,G168.LegalForms": "このフォームがユーザーに財務上または法律上のコミットメントを義務付ける場合、ユーザーが制御可能なデータを修正または削除する、またはテスト回答を送信する場合は、送信が可逆であるか、入力エラーのチェックを行っているか、またはユーザーによる確認を行っているかを確認してください。",
    "3_3_5_G71,G184,G193": "ウェブフォームやコントロールレベルで、このフォームの状況依存ヘルプが利用できることを確認してください。",
    "3_3_6_G98,G99,G155,G164,G168.AllForms": "このフォームへの送信が可逆であるか、入力エラーのチェックを行っているか、またはユーザーによる確認を行っているかを確認してください。",
    "4_1_1_F77": 'ウェブページに重複したid属性値 "{{id}}" が見つかりました。',
    "4_1_2_H91.A.Empty": "アンカー要素がID付きで見つかりましたが href またはリンクテキストがありません。このIDを親または近くの要素に移動することを検討してください。",
    "4_1_2_H91.A.EmptyWithName": "name属性を持つアンカー要素が見つかりましたが、 href またはリンクテキストがありません。 name 属性を親または近くの要素のIDになるように移動することを検討してください。",
    "4_1_2_H91.A.EmptyNoId": "アンカー要素にリンクのコンテンツがなく、name または ID 属性もありません。",
    "4_1_2_H91.A.NoHref": "アンカー要素をページ内リンクの対象の定義に使用するべきではありません。このIDが別の目的(CSSやスクリプト等)で使用されていないなら、親要素へ移動することを検討してください。",
    "4_1_2_H91.A.Placeholder": "有効なリンクのコンテンツをもつアンカー要素が見つかりましたが、 href 、 ID 、 name のいずれの属性も与えられていません。",
    "4_1_2_H91.A.NoContent": "有効なhref属性をもつアンカー要素が見つかりましたが、リンクのコンテンツが与えられていません。",
    "4_1_2_input_element": "input 要素",
    "4_1_2_element_content": "要素のコンテンツ",
    "4_1_2_element": "要素",
    "4_1_2_msg_pattern": "この {{msgNodeType}} は、アクセシビリティAPIに名前を提供していません。有効な名前は: {{builtAttrs}}.",
    "4_1_2_msg_pattern_role_of_button": 'この要素は "button" ロールをもっていますが、アクセシビリティAPIに名前を提供していません。有効な名前は: {{builtAttrs}}.',
    "4_1_2_msg_pattern2": "この {{msgNodeType}} は、アクセシビリティAPIに値を提供していません。",
    "4_1_2_msg_add_one": "要素にコンテントを追加することで一つ追加します。",
    "4_1_2_msg_pattern3": "この {{msgNodeType}} は、初期の選択項目をもっていません。お使いのHTMLバージョンによっては、アクセシビリティAPIから見える値は未定義となるかもしれません。",
    "4_1_2_value_exposed_using_attribute": "{{requiredValue}} 属性を使用することで値が露出します。",
    "4_1_2_value_exposed_using_element": "{{requiredValue}} 要素を使用することで値が露出します。"
};

_global.translation["nl"] = {
    auditor_name: "HTML_CodeSniffer door Squiz",
    auditor_using_standard: "Gebruikt de standaard",
    auditor_standards: "Standaarden",
    auditor_code_snippet: "Codefragment",
    auditor_close: "Sluiten",
    auditor_select_types: "Kies welk type problemen op te nemen in het verslag",
    auditor_home: "Home",
    auditor_view_report: "Bekijk het verslag",
    auditor_report: "Verslag",
    auditor_back_to_report: "Terug naar het verslag",
    auditor_previous_issue: "Vorig probleem",
    auditor_next_issue: "Volgend probleem",
    auditor_issue: "Probleem",
    auditor_of: "van",
    auditor_errors: "Fouten",
    auditor_error: "Fout",
    auditor_warnings: "Waarschuwingen",
    auditor_warning: "Waarschuwing",
    auditor_notices: "Kennisgevingen",
    auditor_notice: "Kennisgeving",
    auditor_toggle_display_of: "Schakel weergave van",
    auditor_messages: "berichten",
    auditor_unable_to_point: "Kan niet wijzen naar het element waarop dit probleem betrekking heeft.",
    auditor_unable_to_point_entire: "Kan niet wijzen naar dit probleem, aangezien het betrekking heeft op het hele document",
    auditor_unable_to_point_removed: "Kan niet wijzen naar dit element, het werd verwijderd sedert de aanmaak van dit verslag",
    auditor_unable_to_point_outside: "Kan niet wijzen naar dit element, het bevindt zich buiten het body-element van de pagina",
    auditor_unable_to_point_hidden: "Kan niet wijzen naar dit element, het is verborgen of heeft geen visuele representatie",
    auditor_point_to_element: "Wijzen naar het element",
    auditor_unsupported_browser: "De codefragment functionaliteit wordt niet ondersteund door deze browser",
    auditor_page: "Pagina",
    auditor_updated_to: "HTML_CodeSniffer werd bijgewerkt naar versie",
    auditor_view_the_changelog: "Bekijk de changelog",
    auditor_success_criterion: "Succescriterium",
    auditor_suggested_techniques: "Voorgestelde technieken",
    auditor_applies_entire_document: "Dit is van toepassing op het hele document",
    "1_1_1_H30.2": "Img element is de enige inhoud van de link, maar bevat geen alt tekst. De alt tekst dient het doel van deze link te beschrijven.",
    "1_1_1_H67.1": "Img element met een lege alt tekst mag enkel geen of een leeg titel attribuut hebben.",
    "1_1_1_H67.2": "Img element werd gemarkeerd om  genegeerd te worden door Hulptechnologie",
    "1_1_1_H37": "Img element bevat geen alt attribuut. Gebruik een alt attribuut om een kort tekstalternatief weer te geven.",
    "1_1_1_G94.Image": "Zorg ervoor dat het alt attribuut van dit img element hetzelfde doel dient en dezelfde informatie weergeeft als de afbeelding.",
    "1_1_1_H36": "Afbeelding in de indienknop heeft geen alt attribuut.  Zorg voor een tekstalternatief dat de functie van de knop beschrijft, gebruik een alt attribuut.",
    "1_1_1_G94.Button": "Zorg ervoor dat alt text van de afbeelding in de indienknop het doel van de knop beschrijft.",
    "1_1_1_H24": "Area-element in een image map heeft geen alt attribuut. Ieder area element moet een tekstalternatief hebben dat de functie ervan beschrijft.",
    "1_1_1_H24.2": "Zorg ervoor dat het tekstalternatief van het area element hetzelfde doel heeft als het deel van de image map afbeelding waarnaar het verwijst.",
    "1_1_1_G73,G74": "Als dit beeld niet volledig kan omschreven worden in een kort tekstalternatief, zorg er dan voor dat een langer tekstalternatief beschikbaar is, bijvoorbeeld in de bodytekst of via een link.",
    "1_1_1_H2.EG5": "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link herhaalt",
    "1_1_1_H2.EG4": "Img element binnen een link heeft een lege of ontbrekende alt tekst terwijl een link net ernaast linktekst bevat. Overweeg beide links samen te voegen.",
    "1_1_1_H2.EG3": "Img element binnen een link mag geen alt tekst gebruiken die de tekstinhoud van de link ernaast herhaalt.",
    "1_1_1_H53,ARIA6": "Object elementen moeten een tekstalternatief bevatten indien alle andere alternatieven uitgeput zijn.",
    "1_1_1_G94,G92.Object,ARIA6": "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    "1_1_1_H35.3": "Applet elementen moeten een tekstalternatief bevatten in de body van het element, voor browsers die het applet element niet ondersteunen.",
    "1_1_1_H35.2": "Applet elementen moeten een alt attribuut  bevatten, om een tekst-alternatief te bieden in browsers die het element ondersteunen maar de applet niet kunnen laden.",
    "1_1_1_G94,G92.Applet": "Controleer of een kort (of indien toepasselijk, lang) tekstalternatief beschikbaar is voor niet-tekstuele inhoud en dat die hetzelfde doel dient en dezelfde informatie toont.",
    "1_2_1_G158": "Indien dit embedded object vooraf opgenomen audio bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is.",
    "1_2_1_G159,G166": "Indien dit embedded object vooraf opgenomen video bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of een alternatieve tekstversie beschikbaar is, of dat een audiospoor beschikbaar is dat equivalente informatie aanbiedt.",
    "1_2_2_G87,G93": "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of ondertitels aangeboden worden voor audio inhoud.",
    "1_2_3_G69,G78,G173,G8": "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat en niet aangeboden wordt als alternatief voor tekstuele inhoud, controleer dan of er een audio beschrijving voor de video, en/of een alternatieve tekstversie beschikbaar is.",
    "1_2_4_G9,G87,G93": "Indien dit embedded object gesynchroniseerde media bevat, controleer dan of er ondertitels aangeboden worden voor live audio inhoud.",
    "1_2_5_G78,G173,G8": "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat , controleer dan of er een audio beschrijving voor de video inhoud.",
    "1_2_6_G54,G81": "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, controleer dan of er een gebarentaal interpretatie beschikbaar is voor de audio-inhoud.",
    "1_2_7_G8": "Indien dit embedded object vooraf opgenomen gesynchroniseerde media bevat, en pauzes in de voorgrond-audio onvoldoende zijn voor audiobeschrijving om de betekenis van de opgenomen video te communiceren, controleer dan of er een uitgebreide audiobeschrijving voorzien is, ofwel via scripting of via een alternatieve versie.",
    "1_2_8_G69,G159": "Indien dit embedded object vooraf opgenomen gesynchroniseerde media of louter video bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    "1_2_9_G150,G151,G157": "Indien dit embedded object enkel live audio-inhoud bevat, controleer dan of een tekstalternatief voor de inhoud beschikbaar is.",
    "1_3_1_F92,ARIA4": 'De rol van dit element is "presentation" maar deze bevat onderliggende elementen met een semantische betekenis.',
    "1_3_1_H44.NonExistent": 'Het "for" attribuut van dit label bevat een ID die niet bestaat in het document.',
    "1_3_1_H44.NonExistentFragment": 'Het "for" attribuut van dit label bevat een ID die niet bestaat in het documentfragment.',
    "1_3_1_H44.NotFormControl": 'Het "for" attribuut van dit label bevat een ID voor een element dat geen formulierbesturingselement. Controleer of het juiste ID ingevoerd is voor het bedoelde element.',
    "1_3_1_H65": 'Dit formulierbesturingselement heeft een "titel" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    "1_3_1_ARIA6": 'Dit formulierbesturingselement heeft een "aria-label" attribuut dat leeg is of enkel spaties bevat. Het wordt genegeerd voor label testdoeleinden.',
    "1_3_1_ARIA16,ARIA9": 'Dit formulierbesturingselement heeft een "aria-labelledby" attribuut, dit bevat echter eeb ID "{{id}}" dat niet bestaat op een element. Het wordt genegeerd voor label testdoeleinden.',
    "1_3_1_F68.Hidden": "Dit verborgen formulierveld is gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.",
    "1_3_1_F68.HiddenAttr": 'Dit formulierveld is bedoeld om verborgen te zijn (via het "hidden" attribuut), maar is ook gelabeled. Een label is niet noodzakelijk voor een verborgen formulierveld.',
    "1_3_1_F68": 'Dit formulierveld zou gelabeled moeten zijn. Gebruik het label element (ofwel met een "for" attribuut of als omvattend element rond het formulierveld), of "title" "aria-label" of "aria-labbeledby" attributen waar gepast.',
    "1_3_1_H49.": "Presentationele markup gebruikt die vervallen is in HTML5",
    "1_3_1_H49.AlignAttr": "Align attributen.",
    "1_3_1_H49.Semantic": "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    "1_3_1_H49.AlignAttr.Semantic": "Semantische markup zou gebruikt moeten worden om benadrukte of speciale tekst aan te duiden zodat dit programmatisch bepaald kan worden.",
    "1_3_1_H42": "Heading markup zou gebruikt moeten worden indien deze inhoud bedoeld is als een hoofding.",
    "1_3_1_H63.3": "Tabelcel heeft een ongeldig scope attribuut. Geldige waardes zijn row, col, rowgroup of colgroup",
    "1_3_1_H63.2": "Scope attributen op td elementen die als hoofdingen gebruikt worden voor andere elementen zijn vervallen in HTML. Gebruik in plaats daarvan een th element.",
    "1_3_1_H43.ScopeAmbiguous": "Scope attributen op th elementen zijn ambigu in een tabel met meerdere niveaus van hoofding. Gebruik in plaats daarvan het headers attribuut op td elementen.",
    "1_3_1_H43.IncorrectAttr": 'Foutief headers attribuut op dit td element. "{{expected}}" werd verwacht maar "{{actual}}" gevonden',
    "1_3_1_H43.IncorrectAttrNotice": "Check that headers attribute on td element is correct.",
    "1_3_1_H43.HeadersRequired": "De relatie tussen td elementen en de eraan gebonden th elementen werd niet omschreven. Gezien deze tabel meerdere niveaus th elmenten bevat, moet het headers attribuut gebruikt worden op td elementen.",
    "1_3_1_H43.MissingHeaderIds": "Niet alle th elementen in deze tabel hebben een id attribuut. Deze cellen zouden ids moeten bevatten zodat er kan naar verwezen worden in het headers attribuut van td elementen.",
    "1_3_1_H43.MissingHeadersAttrs": "Niet alle td elementen in deze tabel hebben een headers attribuut. Elk headers attribuut zou een lijst moeten bevatten van de ids van alle th elementen die verband houden met deze cel",
    "1_3_1_H43,H63": "De relatie tussen td elementen en de ermee verband houdende th elementen is niet omschreven. Gebruik ofwel het scope attribuut op th elementen of het headers attribuut op td elementen.",
    "1_3_1_H63.1": "Niet alle th elementen in deze tabel hebben een scope attribuut. Deze cellen zouden een scope attribuut moeten bevatten om hun verband met td elementen te identificeren.",
    "1_3_1_H73.3.LayoutTable": "Deze tabel lijkt gebruikt te worden voor opmaak, maar bevat een summary attribuut. Opmaaktabellen mogen geen summary attributen bevatten, of indien deze toch aanwezig zijn, moeten ze leeg zijn.",
    "1_3_1_H39,H73.4": "Indien deze tabel een datatabel is en zowel het summary als het caption element aanwezig zijn, mag het summary attribuut geen herhaling zijn van het caption element",
    "1_3_1_H73.3.Check": "Indien deze tabel een datatabel is, controleer dan dat het summary attribuut de organisatie en het gebruik van deze tabel verduidelijkt.",
    "1_3_1_H73.3.NoSummary": "Indien deze tabel een datatabel is, overweeg dan het summary attribuut van het tabel element te gebruiken om een overzicht over deze tabel te geven.",
    "1_3_1_H39.3.LayoutTable": "Deze tabel lijkt gebruik te worden voor opmaak, maar bevat een caption element. Opmaaktabellen mogen geen caption bevatten.",
    "1_3_1_H39.3.Check": "Indien deze tabel een datatabel is, controleer dan dat het caption element een nauwkeurige beschrijving geeft van de tabel.",
    "1_3_1_H39.3.NoCaption": "Indien deze tabel een datatabel is, overweeg dan een caption element bij het table element te gebruiken om de tabel te identificeren.",
    "1_3_1_H71.NoLegend": "Fieldset bevat geen legend element. Alle fieldsets zouden een legend element moeten bevatten dat een beschrijving geeft van de veldengroep.",
    "1_3_1_H85.2": "Indien deze keuzelijst groepen verwante opties bevat, zouden ze gegroepeerd moeten worden met optgroup.",
    "1_3_1_H71.SameName": "Indien radioknoppen of selectievakjes een verdere beschrijving vergen op groepsniveau, zouden ze moeten omvat worden in een fieldset element.",
    "1_3_1_H48.1": "Deze inhoud lijkt op een gesimuleerde niet-geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ul-element de informatie in het document een betere structuur geven.",
    "1_3_1_H48.2": "Deze inhoud lijkt op een gesimuleerde geordende lijst in tekst zonder opmaak. Indien dit klopt, dan zou deze inhoud markeren met een ol-element de informatie in het document een betere structuur geven.",
    "1_3_1_G141_a": "De hoofdingstructuur is niet logisch genest. Dit h{{headingNum}} element lijkt de primaire documenthoofding te zijn, dit zou dan een h1 element moeten zijn.",
    "1_3_1_G141_b": "De hoofdingstructuur is niet logisch genest. Dit h{{headingNum}} element zou een h{{properHeadingNum}} moeten zijn voor een juiste structuur.",
    "1_3_1_H42.2": "Hoofding tag gevonden zonder inhoud. Tekst die niet bedoeld is als hoofding zou niet mogen gemarkeerd worden met een hoofding tag.",
    "1_3_1_H48": "Indien dit element een navigatie-sectie bevat, wordt aanbevolen lijst-markup te gebruiken.",
    "1_3_1_LayoutTable": "Deze tabel lijkt een opmaaktabel te zijn. Indien deze bedoeld is als een datatabel, zorg er dan voor dat hoofding cellen geÔdentificeerd worden met th elementen.",
    "1_3_1_DataTable": "Deze tabel lijkt een datatabel te zijn. Indien deze bedoeld is als een opmaaktabel, zorg er dan voor dat er geen th elementen, summary of caption aanwezig zijn.",
    "1_3_2_G57": "Controleer dat de inhoud in een betekenisvolle volgorde staat indien lineair weergegeven, zoals wanneer stylesheets gedesactiveerd zijn.",
    "1_3_3_G96": "Indien instructies voorzien zijn voor het goed begrip van de inhoud, reken dan niet enkel op zintuigelijke eigenschappen (zoals vorm, grootte of positie) om voorwerpen te omschrijven.",
    "1_3_4.RestrictView": "Controleer dat de inhoud zijn uitzicht en werking niet beperkt tot ÈÈn weergave-oriëntatie, zoals staand of liggend, tenzij zo'n specifieke weergave-oriëntatie essentieel is.",
    "1_3_5_H98.FaultyValue": "Dit element bevat een potentieel foutieve waarde in het autocomplete attribuut: {{valuesStr}}. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute.",
    "1_3_5_H98.InvalidAutoComplete_Text": "Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Text besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutoComplete_Multiline": "Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Multiline besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutoComplete_Password": "Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Password besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutoComplete_Url": "Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Url besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutoComplete_Telephone": "Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Telephone besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutoComplete_Numeric": "Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Numeric besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutoComplete_Month": "Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Month besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.InvalidAutoComplete_Date": "Ongeldige autocomplete waarde: {{x}}. Element maakt geen deel uit van de Date besturingselementen. Zie https://www.w3.org/TR/html52/sec-forms.html#autofilling-form-controls-the-autocomplete-attribute",
    "1_3_5_H98.Purpose": "Controleer dat het invoerveld een doel dient zoals beschreven in Input Purposes for User Interface Components sectie, en dat de inhoud is geÔmplementeerd met technologiën die het identificeren van de verwachtte betekenis van formulierinvoerdata ondersteunen.",
    "1_3_5_H98.MissingAutocomplete": "Dit element heeft geen autocomplete attribuut. Indien dit veld informatie verzamelt over de gebruiker, overweeg dan er ÈÈn toe te voegen om te conformeren met dit succescriterium.",
    "1_3_6_ARIA11.Check": "Controleer dat het doel van de gebruikersinterface-onderdelen, iconen en regio's programmatorisch kunnen bepaald worden",
    "1_4_1_G14,G18": "Controleer dat alle informatie die gecommuniceerd wordt via kleur eveneens beschikbaar is als tekst of als een andere visuele hint.",
    "1_4_2_F23": "Indien dit element audiop bevat die automatisch langer dan 3 seconden speelt, controleer dan dat de mogelijkheid bestaat om de audio te pauzeren, stoppen of stil te zetten.",
    "1_4_3_F24.BGColour": "Controleer of dit element een overgeërfde voorgrondkleur heeft die complementair is met de overeenkomstige inline achtergrondkleur of afbeelding.",
    "1_4_3_F24.FGColour": "Controleer of dit element een overgeërfde achtergrondkleur of afbeelding heeft die complementair is met de overeenkomstige inline voorgrondkleur.",
    "1_4_3_G18_or_G145.Abs": "Dit element is absoluut gepositioneerd en de achtergrondkleur kan niet bepaald worden. Zorg ervoor dat de contrastverhouding tussen de tekst en alle bedekte delen van de achtergond minstens {{required}}:1 is.",
    "1_4_3_G18_or_G145.BgImage": "De tekst van dit element werd geplaatst op een achtergrondafbeelding. Zorg ervoor dat de contrastverhouding tussen de tekst en alle bedekte delen van de achtergrondafbeelding minstens {{required}}:1 is.",
    "1_4_3_G18_or_G145.Alpha": "De tekst of achtergrond van dit element bevat transparantie. Zorg ervoor dat de contrastverhouding tussen de tekst en de achtergond minstens {{required}}:1 is.",
    "1_4_3_G18_or_G145.Fail": "Dit element heeft onvoldoende contrast op dit conformantie-niveau. Een contrastverhouding van minstens {{required}}:1 wordt verwacht, maar de tekst in dit element heeft een contrastverhouding van {{value}}:1.",
    "1_4_3_G18_or_G145.Fail.Recomendation": "Aanbeveling:",
    "1_4_3_G18_or_G145.Fail.Recomendation.Text": "verander tekstkleur naar {{value}}",
    "1_4_3_G18_or_G145.Fail.Recomendation.Background": "verander achtergrond naar{{value}}",
    "1_4_4_G142": "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie en zonder verlies van inhoud of functionaliteit.",
    "1_4_5_G140,C22,C30.AALevel": "Indien de gebruikte technologie de visuele presentatie kan weergeven, controleer dan dat tekst gebruikt werd om informatie weer te geven, in plaats van afbeeldingen van tekst, behalve als de afbeelding van tekst essentieel is voor de weer te geven informatie, of visueel kan aangepast worden aan de noden van de gebruiker.",
    "1_4_6_G18_or_G17.Abs": "Dit element is absoluut gepositioneerd en de achtergrondkleur kan niet bepaald worden. Zorg ervoor dat de contrastverhouding tussen de tekst en alle bedekte delen van de achtergond minstens {{required}}:1 is.",
    "1_4_6_G18_or_G17.BgImage": "De tekst van dit element werd geplaatst op een achtergrondafbeelding. Zorg ervoor dat de contrastverhouding tussen de tekst en alle bedekte delen van de achtergrondafbeelding minstens {{required}}:1 is.",
    "1_4_6_G18_or_G17.Fail": "Dit element heeft onvoldoende contrast op dit conformantie-niveau. Een contrastverhouding van minstens {{required]}}:1 wordt verwacht, maar de tekst in dit element heeft een contrastverhouding van {{value}}:1.",
    "1_4_6_G18_or_G17.Fail.Recomendation": "Aanbeveling:",
    "1_4_6_G18_or_G17.Fail.Recomendation.Text": "verander tekstkleur naar {{value}}",
    "1_4_6_G18_or_G17.Fail.Recomendation.Background": "verander achtergrond naar{{value}}",
    "1_4_7_G56": "Voor voordien opgenomen pure audio-inhoud in dit element die hoofdzakelijk spraak is (zoals vertelling) dienen achtergrondgeluiden stil kunnen gezet worden, of ten minste 20 dB (of 4 maal) stiller te zijn dan de spraak.",
    "1_4_8_G148,G156,G175": "Controleer dat een mechanisme beschikbaar is voor de gebruiker om de voorgrond- en achtergrondkleuren van tekstblokken te kiezen, via de webpagina of via de browser.",
    "1_4_8_H87,C20": "Controleer of een mechanisme bestaat om de breedte van een blok tekst te beperken tot niet meer dan 80 tekens (of 40 tekens in Chineese, Japans of Koreaans schrift)",
    "1_4_8_C19,G172,G169": "Controleer dat tekstblokken niet vol uitgelijnd zijn - dat wil zeggen, op zowel de linker- als rechterrand - of dat een mechanisme beschikbaar is om de volle uitlijning af te zetten.",
    "1_4_8_G188,C21": "Controleer dat de lijnspatiëring in tekstblokken minstens 150% is in paragrafen en de spatiëring tussen paragrafen minstens 1,5 keer de lijnspatiëring, of dat een mechanisme beschikbaar is om dit te bereiken.",
    "1_4_8_H87,G146,C26": "Controleer dat de tekst tot 200% uitvergroot kan worden zonder hulptechnologie zonder dat de gebruiker verplicht wordt horizontaal te scrollen in een schermbreed venster.",
    "1_4_9_G140,C22,C30.NoException": "Controleer dat afbeeldingen van tekst enkel gebruikt worden voor zuivere decoratie of waar een specifieke weergave van tekst essentieel deel uitmaakt van de weer te geven informatie.",
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Check": "Controleer dat de inhoud kan weergegeven worden zonder verlies van informatie of functionaliteit en zonder in twee dimensies te moeten scrollen voor: Verticaal scrollende inhoud op een breedte equivalent aan 320 CSS pixels    Horizontaal scrollende inhoud op een hoogte equivalent aan CSS pixels. Behalve voor die delen van de inhoud die een tweedimensionale opmaak vergen voor gebruik of betekenis.",
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed": 'Dit element heeft "position: fixed". Dit kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.',
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling": "Voorgeformatteerde tekst kan scrollen in twee dimensies vereisen, wat beschouwd wordt als een mislukking van dit succescriterium.",
    "1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom": "Tussen beide komen in de mogelijkheid van de User Agent om uit te vergroten kan beschouwd worden als een mislukking van dit succescriterium.",
    "1_4_11_G195,G207,G18,G145,G174,F78.Check": "Controleer dat de visuele weergave van de volgende zaken een contrastverhouding van minstens 3:1 tegen aangrenzende kleuren:       Gebruikersinterface-onderdelen: visuele informatie vereist om gebruikersinterface-onderdelen te herkennen en hun status, behalve voor inactieve onderdelen or waar het uitzicht van het component door de User Agent bepaald wordt en niet gewijzigd is geweest door de auteur      Grafische objecten: delen van de afbeelding vereist om de inhoud te begrijpen, behalve daar waar de specifieke weergave essentieel is voor de communicatie van de informatie.     ,",
    "1_4_12_C36,C35.Check": "Controleer dat er geen verlies van inhoud of functionaliteit optreedt bij het instellen van de volgende eigenschappen en zonder andere stijleigenschappen te wijzigen: Lijnhoogte (lijnspatiëring) naar minstens 1,5 maal de lettergrootte Spatieing na paragrafen tot minstens 2 maal de lettergrootte Letterspatiëring (tracking) tot minstens 0,12 de lettergrootte Woordspatiëring tot minstens 0,16 maal de lettergrootte.",
    "1_4_13_F95.Check": "Controleer dat waar een pointer hover of toetsenbordfocus aanvullende content doet zichtbaar worden en terug verbergen, het volgende waar is:         Als de aanvullende content een deel van de andere content bedekt, moet het mogelijk zijn om de aanvullende content (zoals een tooltip) opnieuw te verbergen zonder dat de muisaanwijzer verplaatst hoeft te worden en zonder de focus van het element weg te hoeven nemen Als de aanvullende content verschijnt door een element aan te wijzen (zonder te klikken), dan mag de content niet verdwijnen als de gebruiker de muis beweegt in het gebied waarin de aanvullende content is verschenen.De aanvullende content moet zichtbaar blijven totdat de gebruiker de muisaanwijzer buiten het element plaatst, de toetsenbordfocus actief verplaatst of op Escape drukt. Ten slotte mag de aanvullende content ook automatisch verdwijnen, maar enkel wanneer de weergegeven informatie niet meer geldig is ó bijvoorbeeld wanneer gemeld wordt dat een e-mailadres niet correct is ingevuld, maar de gebruiker deze fout al heeft verbeterd.",
    "2_1_1_G90": "Controleer dat de functionaliteit voorzien in een eventhandler voor dit element beschikbaar is via het toetsenbord",
    "2_1_1_SCR20.DblClick": "Controleer dat de functionaliteit voorzien bij dubbelklikken op dit element beschikbaar is via het toetsenbord.",
    "2_1_1_SCR20.MouseOver": "Controleer dat de functionaliteit voorzien door een muisbeweging over dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het focus event.",
    "2_1_1_SCR20.MouseOut": "Controleer dat de functionaliteit voorzien door een muisbeweging uit dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het blur event.",
    "2_1_1_SCR20.MouseMove": "Controleer dat de functionaliteit voorzien door een muisbeweging op dit element beschikbaar is via het toetsenbord",
    "2_1_1_SCR20.MouseDown": "Controleer dat de functionaliteit voorzien door een muisklik - mousedown op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keydown event.",
    "2_1_1_SCR20.MouseUp": "Controleer dat de functionaliteit voorzien door een muisklik - mouseup op dit element beschikbaar is via het toetsenbordbijvoorbeeld door gebruik te maken van het keyup event.",
    "2_1_2_F10": "Controleer dat deze applet of plugin de mogelijkheid biedt om het focus weg te nemen van zichzelf via het toetsenbord.",
    "2_1_4.Check": "Controleer dat indien sneltoets voorzien is met maar ÈÈn letter (inclusief hoofd- en kleine letters), punctuering, getal of symboolkarakters, minstens ÈÈn van volgende stellingen waar his:         Uitzetten: Er is een mechanisme om de sneltoets af te zetten Hermappen: Er is mechanisme beschikbaar om de shortcut te hermappen om gebruik te maken van ÈÈn van de niet printbare toetsenbordkarakters (bvb. Ctrl, Alt, etc) Enkel aktief bij focus: De sneltoets voor een gebruikersinterface-onderdeel is enkel aktief als dat onderdeel het focus heeft.",
    "2_2_1_F40.2": "Meta refresh tag wordt gebruikt om te redirecten naar een andere pagina, met een tijdslimiet die niet nul is. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    "2_2_1_F41.2": "Meta refresh tag wordt gebruikt om de huidige pagina te verversen. Gebruikers kunnen deze tijdslimiet niet beÔnvloeden.",
    "2_2_2_SCR33,SCR22,G187,G152,G186,G191": "Indien een onderdeel van de inhoud beweegt, scrollt of knippert gedurende langer dan 5 seconden, of automatisch ververst, controleer dan of er een mechanisme beschikbaar is om te pauzeren, te stoppen of de inhoud te verbergen.",
    "2_2_2_F4": "Controleer dat er een mechanisme beschikbaar is om dit knipperende element in minder dan vijf seconden te stoppen.",
    "2_2_2_F47": "Blink elementen kunnen niet voldoen aan de vereiste dat knipperende informatie gestopt kan worden binnen de vijf seconden.",
    "2_2_3_G5": "Controleer dat de timing geen essentieel onderdeel is van een gebeurtenis of activiteit voorgesteld door de inhoud, behalve voor niet-interactieve gesynchroniseerde media en real-time gebeurtenissen.",
    "2_2_4_SCR14": "Controleer dat alle onderbrekingen (inclusief inhoudsverversing) uitgesteld of afgezet kunnen worden door de gebruiker, behalve onderbrekingen die betrekking hebben tot een noodgeval.",
    "2_2_5_G105,G181": "Indien deze webpagina deel uitmaakt van een set pagina's met een tijdslimiet op inactiviteit, controleer dan dat een geauthenticeerde gebruiker de activiteit zonder gegevensverlies kan voortzetten na herauthenticatie.",
    "2_2_6.Check": "Controleer dat gebruikers verwittigd werden van de duur van inactiviteit die gegevensverlies zou kunnen veroorzaken, tenzij de gegevens langer dan 20 uur bewaard worden als de gebruiker geen actie onderneemt.",
    "2_3_1_G19,G176": "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde, of dat de afmeting van het flitsend gebied voldoende klein is.",
    "2_3_2_G19": "Controleer dat geen enkel onderdeel van de inhoud meer dan drie keer flitst in om het even welke periode van 1 seconde.",
    "2_3_3.Check": "Controleer dat de bewegingsanimatie veroorzaakt door interacties kan uitgezet worden, tenzij deze animatie essentieel is voor de functionaliteit of de weer te geven informatie.",
    "2_4_1_H64.1": "Iframe element vereist een niet-leeg title attribuut dat het kader identificeert.",
    "2_4_1_H64.2": "Controleer dat het title attribuut van dit element tekst bevat die het kader identificeert.",
    "2_4_1_G1,G123,G124,H69": "Controleer dat veel voorkomende navigatie-elementen overgeslagen kunnen wordenbijvoorbeeld door gebruik van skip links, hoofding elementen of ARIA landmark rollen.",
    "2_4_1_G1,G123,G124.NoSuchID": 'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam.',
    "2_4_1_G1,G123,G124.NoSuchIDFragment": 'Deze link wijst naar een genaamd anker "{{id}}" binnen het document, maar er is geen anker met deze naam binnen het geteste fragment.',
    "2_4_2_H25.1.NoHeadEl": "Er is geen head sectie waarin een beschrijvend title element kan geplaatst worden.",
    "2_4_2_H25.1.NoTitleEl": "Voor dit document dient een titel voorzien te worden, door een niet-leeg title element in de head sectie te plaatsen.",
    "2_4_2_H25.1.EmptyTitle": "Het title element in de head sectie mag niet leeg zijn.",
    "2_4_2_H25.2": "Controleer dat het title element het document beschrijft.",
    "2_4_3_H4.2": "Indien tabindex gebruikt wordt, controleer dan dat de tabvolgorde gespecifieerd door de tabindex attributen de relaties in de inhoud volgt.",
    "2_4_4_H77,H78,H79,H80,H81,H33": "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context, of zijn title attribuut, het doel van de link identificeert.",
    "2_4_4_H77,H78,H79,H80,H81": "Controleer dat de linktekst, gecombineerd met de programmatisch bepaalde link context het doel van de link identificeert.",
    "2_4_5_G125,G64,G63,G161,G126,G185": "Indien deze webpagina geen deel uitmaakt van een lineair proces, controleer dan of er meer dan ÈÈn manier is om deze webpagina te vinden binnen een set webpagina's.",
    "2_4_6_G130,G131": "Controleer dat de hoofdingen en labels de inhoud en het doel beschrijven.",
    "2_4_7_G149,G165,G195,C15,SCR31": "Controleer dat er minstens een werkwijze is waarbij de toetsenbord focus indicator visueel teruggevonden kan worden op gebruiksinterface-besturingselementen.",
    "2_4_8_H59.1": "Link elementen kunnen enkel geplaatst worden in de head sectie van het document",
    "2_4_8_H59.2a": "Er ontbreekt een niet-leeg rel attribuut in het link element die het linktype identificeert.",
    "2_4_8_H59.2b": "Er ontbreekt een niet-leeg href attribuut in het link element dat wijst naar de gelinkte resource.",
    "2_4_9_H30": "Controleer of de tekst van de link het doel van de link beschrijft.",
    "2_5_1.Check": "Controleer dat alle functionaliteit die multipoint of pad-gebaseerde bewegingen gebruikt voor de werking gebruikt kan worden met één enkele pointer zonder pad-gebaseerde bewegingen, tenzij multipoint of pad-gebaseerde bewegingen essentieel zijn.",
    "2_5_2.Mousedown_Check": "Dit element heeft een mousedown event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    "2_5_2.Touchstart_Check": "Dit element heeft een touchstart event listener. Controleer dat voor functinaliteit die gebruikt kan worden met één enkele pointer, minstens één van de volgende stellingen waar is:     Geen Down-event: Het down-event van de pointer wordt niet gebruikt om een deel van de functie uit te voeren; Afbreken of ongedaan maken: Vervollediging van deze functie is gehoofdingpeld aan het up-event en een mechanisme is beschikbaar om de functie voortijdig af te breken of ongedaan te maken na uitvoering; Up omkering: Het up-event keert de resultaten van het voorafgaande down-event om; Essentieel: De functie vervolledigen op het down-event is essentieel.",
    "2_5_3_F96.Check": "Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    "2_5_3_F96.AccessibleName": "De toegankelijke naam voor dit element bevat geen zichtbare label tekst. Controleer dat voor gebruiksinterface componenten met labels die tekst or afbeeldingen van tekst gebruiken, de naam de tekst bevat die visueel weergegeven wordt.",
    "2_5_4.Check": "Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface compoonenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.     ,",
    "2_5_4.Devicemotion": "Dit element heeft een devicemotion event listener. Controleer dat de functionaliteit die bediend kan worden door beweging van het toestel of de gebruiker bediend kan worden via gebruiksinterface componenten en dat reageren op de beweging kan afgezet worden om accidentele actuatie te voorkomen, behalve waar:    Ondersteunde Interface: De beweging gebruikt wordt om de functionaliteit te bedienen rond een toegankelijkheid ondersteunende interface; Essentieel: De beweging is essentieel voor het goed functioneren en deze niet gebruiken zou de activiteit onmogelijk maken.",
    "2_5_5.Check": "Controleer dat de afmeting van het doelwit voor pointer invoer minstens 44 op 44 CSS pixels groot is, behalve indien:         Equivalent: Het doelwit beschikbaar is door een equivalente link of besturing op dezelfde pagina die minstens 44 op 44 CSS pixels groot is Inline: Het doel een zin of een blok tekst is User Agent Beheer: De afmeting van het doelwit bepaald wordt dooe de User Agent en niet gewijzigd werd door de auteur Essentieel: Een specifieke voorstelling van het doelwit is essentieel voor de over te brengen informatie.     ,",
    "2_5_6.Check": "Controleer dat de inhoud het gebruik van invoermiddelen beschikbaar op een platform niet beperkt behalve indien deze beperking essentieel is, vereist om de veiligheid van de inhoud te verzekeren of gebruikersinstellingen te respecteren.",
    "3_1_1_H57.2": "Het html element zou een lang of xml:lang attribuut moeten bevatten dat de taal van het document beschrijft.",
    "3_1_1_H57.3.Lang": "De taal gespecifieerd in het lang attribuut van het document lijkt niet correct geformuleerd.",
    "3_1_1_H57.3.XmlLang": "De taal gespecifieerd in het xml:lang attribuut van het document lijkt niet correct geformuleerd.",
    "3_1_2_H58": "Controleer dat elke taalwijziging aangeduid wordt met het lang en/of xml:lang attribuut op een element, waar toepasselijk.",
    "3_1_2_H58.1.Lang": "De taal gespecifieerd in het lang attribuut van dit element lijkt niet correct geformuleerd.",
    "3_1_2_H58.1.XmlLang": "De taal gespecifieerd in het xml:lang attribuut van dit element lijkt niet correct geformuleerd.",
    "3_1_3_H40,H54,H60,G62,G70": "Controleer of er een mechanisme beschikbaar is voor het identificeren van specifieke definities van woorden en zinnen die in een ongebruikelijke of beperkte manier gebruikt worden, inclusief idiomen en jargon.",
    "3_1_4_G102,G55,G62,H28,G97": "Controleer of er een mechanisme beschikbaar is voor het identificeren van de volledige vorm of betekenis van afkortingen",
    "3_1_5_G86,G103,G79,G153,G160": "Waar de inhoud een leesniveau vereist dat verder gevorderd is dan lager middelbaar onderwijs, zou bijkomende inhoud of een alternatieve versie voorzien moeten worden.",
    "3_1_6_H62.1.HTML5": "Ruby element bevat geen rt element met uitspraakinformatie voor de body tekst.",
    "3_1_6_H62.1.XHTML11": "Ruby element bevat geen rt element met uitspraakinformatie voor de tekst binnen het rb element.",
    "3_1_6_H62.2": "Ruby element bevat geen rp element dat extra punctuering aanbiedt aan browsers die geen ruby tekst ondersteunen",
    "3_2_1_G107": "Controleer dat er geen contextwijziging optreedt indien de focus op dit invoerveld valt.",
    "3_2_2_H32.2": 'Dit formulier heeft geen submit knop, wat problemen veroorzaakt voor zij die het formulier niet met het toetsenbord kunnen indienen. Submit knoppen zijn input elementen met type attribuut "submit" of "image" of button elementen met type "submit" een ongeldig of leeg type attribuut.',
    "3_2_3_G61": "Controleer dat navigatiemechanismes die herhaald worden op meerdere webpagina's in dezelfde volgorde voorkomen iedere keer dat ze herhaald worden, tenzij een wijziging door de gebruiker werd veroorzaakt.",
    "3_2_4_G197": "Controleer dat componenten met dezelfde functionaliteit binnen deze webpagina consistent geÔdentificeerd worden in de set webpagina's waartoe deze behoort.",
    "3_2_5_H83.3": "Controleer dat de link tekst van deze link informatie bevat die weergeeft dat deze link in een nieuw venster zal openen.",
    "3_3_1_G83,G84,G85": "Als een invoerfout automatisch gedetecteerd wordt in dit formulier, controleer dan dat de foute zaken geÔdentificeerd worden en de fouten als tekst aan de gebruiker worden beschreven.",
    "3_3_2_G131,G89,G184,H90": "Controleer of beschrijvende labels of instructies (inclusief voor verplichte velden) voorzien zijn voor gebruikersinvoer in dit formulier.",
    "3_3_3_G177": "Controleer of dit formulier verbeteringssuggesties doet voor fouten in gebruikersinvoer, tenzij dit de veiligheid of het doel van de inhoud in gevaar brengt.",
    "3_3_4_G98,G99,G155,G164,G168.LegalForms": "Indien dit formulier de gebruiker tot een financieel of legaal engagement verplicht, gebruiker-beheerbare gegevens wijzigt of verwijdert of test-antwoorden indient, zorg er dan voor dat indiening omkeerbaar is, gecontroleerd wordt voor invoerfouten en/of bevestigd wordt door de gebruiker.",
    "3_3_5_G71,G184,G193": "Controleer of contextgevoelige hulp beschikbaar is voor dit formulier, op niveau van de webpagina of het besturingselement.",
    "3_3_6_G98,G99,G155,G164,G168.AllForms": "Controleer of indieningen voor dit formulier ofwel omkeerbaar zijn, gecontroleerd worden op invoerfouten en/of bevestigd worden door de gebruiker.",
    "4_1_1_F77": 'Duplicate id attribuutwaaarde "{{id}}" gevonden op de pagina.',
    "4_1_2_H91.A.Empty": "Anker element gevonden met een ID maar zonder een href of link tekst. Overweeg om de ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    "4_1_2_H91.A.EmptyWithName": "Anker element gevonden met een name attribuut maar zonder een href of link tekst. Overweeg om het naam attribuut als ID naar het bovenliggend of een nabijgelegen element te verhuizen.",
    "4_1_2_H91.A.EmptyNoId": "Anker element gevonden zonder linkinhoud en zonder name of ID attribuut.",
    "4_1_2_H91.A.NoHref": "Anker elementen zouden niet gebruikt mogen worden voor in-pagina linkbestemmingen. Indien de ID niet voor andere doeleinden (zoals CSS of scripting) gebruikt wordt, overweeg deze te verhuizen naar een bovenliggend element.",
    "4_1_2_H91.A.Placeholder": "Anker element gevonden binnen link inhoud, maar zonder dat er een href, ID of name attribuut voorzien is.",
    "4_1_2_H91.A.NoContent": "Anker element gevonden met een geldig href attribuut, maar zonder linkinhoud.",
    "4_1_2_input_element": "input element",
    "4_1_2_element_content": "elementinhoud",
    "4_1_2_element": "element",
    "4_1_2_msg_pattern": "Dit {{msgNodeType}} heeft geen naam beschikbaar voor een toegankelijkheids-API. Geldige namen zijn: {{builtAttrs}}.",
    "4_1_2_msg_pattern_role_of_button": 'Dit element heeft de rol "button" maar heeft geen naam beschikbaar voor een toegankelijkheids-API. Geldige namen zijn: {{builtAttrs}}.',
    "4_1_2_msg_pattern2": "Dit {{msgNodeType}} heeft geen waarde beschikbaar voor een toegankelijkheids-API.",
    "4_1_2_msg_add_one": "Voeg ÈÈn toe door inhoud aan het element toe te voegen.",
    "4_1_2_msg_pattern3": 'Dit {{msgNodeType}} heeft geen initieel gekozen optie. Afhankelijk van de HTML versie kan de waarde beschikbaar voor een toegankelijkheids-API "undefined" zijn.',
    "4_1_2_value_exposed_using_attribute": "Een waarde moet beschikbaar zijn via het {{requiredValue}} attribuut.",
    "4_1_2_value_exposed_using_element": "Een waarde moet beschikbaar zijn via het {{requiredValue}} element.",
    "4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check": "Controleer dat statusboodschappen programmatisch bepaald kunnen worden door rol of eigenschappen zodanig dat ze aan de gebruiker kunnen beschikbaar gesteld worden via hulptechnologie zonder de focus te krijgen."
};

_global.translation["pl"] = {
    auditor_name: "Squiz HTML_CodeSniffer",
    auditor_using_standard: "Używany standard",
    auditor_standards: "Standardy",
    auditor_code_snippet: "Fragment kodu",
    auditor_close: "Zamknij",
    auditor_select_types: "Wybierz typy błędów, które mają być w raporcie",
    auditor_home: "Home",
    auditor_view_report: "Zobacz Raport",
    auditor_report: "Raport",
    auditor_back_to_report: "Powrót do Raportu",
    auditor_previous_issue: "Poprzedni Problem",
    auditor_next_issue: "Następny Problem",
    auditor_issue: "Problem",
    auditor_of: "z",
    auditor_errors: "Błędy",
    auditor_error: "Błąd",
    auditor_warnings: "Ostrzeżenia",
    auditor_warning: "Ostrzeżenie",
    auditor_notices: "Uwagi",
    auditor_notice: "Uwaga",
    auditor_toggle_display_of: "Przełącz wyświetlanie",
    auditor_messages: "komunikatów",
    auditor_unable_to_point: "Nie można wskazać elementu powiązanego z tym kryterium.",
    auditor_unable_to_point_entire: "Nie można wskazać tego problemu, ponieważ dotyczy on całego dokumentu.",
    auditor_unable_to_point_removed: "Nie można wskazać tego elementu, ponieważ został on usunięty z dokumentu od momentu wygenerowania raportu.",
    auditor_unable_to_point_outside: "Nie można wskazać tego elementu, ponieważ znajduje się poza elementem treści dokumentu.",
    auditor_unable_to_point_hidden: "Nie można wskazać tego elementu, ponieważ jest on niewidoczny lub nie ma reprezentacji wizualnej.",
    auditor_point_to_element: "Pokaż element",
    auditor_unsupported_browser: "Funkcja nie jest obsługiwana w tej przeglądarce.",
    auditor_page: "Strona",
    auditor_updated_to: "HTML_CodeSniffer został zaktualizowany do wersji",
    auditor_view_the_changelog: "Zobacz dziennik zmian",
    auditor_success_criterion: "Kryteria sukcesu",
    auditor_suggested_techniques: "Sugerowane techniki",
    auditor_applies_entire_document: "Dotyczy to całego dokumentu",
    "1_1_1_H30.2": "Grafika jest jedyną treścią linku i powinna zostać uzupełniona o opis alternatywny opisujący jego funkcję.",
    "1_1_1_H67.1": "Grafika pełni funkcję dekoracyjną zarówno atrybut alt jak i title powinny być puste.",
    "1_1_1_H67.2": "Grafika jest oznaczona jako dekoracyjna i będzie ignorowana przez technologie wspomagające np. czytniki ekranu dla osób niewidomych.",
    "1_1_1_H37": "Znacznik <img> nie ma atrybutu alt. Dodaj ten atrybut i wpisz do niego krótki opis grafiki.",
    "1_1_1_G94.Image": "Upewnij się, że opis alternatywny grafiki przekazuje tę samą informację, co sama grafika.",
    "1_1_1_H36": "Przycisk graficzny nie ma atrybutu alt. Dodaj do przycisku atrybut alt i opisz w nim funkcję przycisku.",
    "1_1_1_G94.Button": "Upewnij się, że opis alternatywny przycisku prawidłowo opisuje funkcję przycisku.",
    "1_1_1_H24": "Element <area> w mapie obrazkowej nie ma atrybutu alt. Każdy taki obszar powinien mieć atrybut alt z opisem alternatywnym, który odpowiednio opisuje dany obszar.",
    "1_1_1_H24.2": "Upewnij się, że opis alternatywny obszaru <area> odpowiada jego funkcji lub treści.",
    "1_1_1_G73,G74": "Jeśli krótki opis alternatywny nie opisuje wystarczająco treści prezentowanej przez grafikę, dodaj rozszerzony opis bezpośrednio na stronie lub na oddzielnej stronie.",
    "1_1_1_H2.EG5": "Opis alternatywny elementu <img> umieszczonego wewnątrz linku, nie może być taki sam jak tekst samego linku.",
    "1_1_1_H2.EG4": "Element <img> znajdujący się wewnątrz linku nie ma atrybutu alt lub alt jest pusty. Ponieważ w sąsiedztwie znajduje się link tekstowy zaleca się połączenie tych elementów w jedno łącze ze wspólnym opisem.",
    "1_1_1_H2.EG3": "Element <img> znajdujący się wewnątrz linku nie może mieć opisu alternatywnego tej samej treści, co link tekstowy znajdujący się w jego sąsiedztwie.",
    "1_1_1_H53,ARIA6": "Element <object> musi zawierać atrybut alt z wprowadzonym opisem alternatywnym o ile nie została zapewniony żaden inny alternatywny opis tego elementu.",
    "1_1_1_G94,G92.Object,ARIA6": "Należy sprawdzić czy krótkie lub długie teksty alternatywne są dostępne dla wszystkich elementów nietekstowych i możliwie najdokładniej je opisują.",
    "1_1_1_H35.3": "<applet> powinien zawierać opis alternatywny wewnątrz znaczników <object>. Zapewni to alternatywę w przeglądarkach, które nie obsługują elementu <applet>.",
    "1_1_1_H35.2": "Applet powinien mieć opis alternatywny w atrybucie alt, aby zapewnić wsparcie w przypadku problemów z załadowaniem zawartości.",
    "1_1_1_G94,G92.Applet": "Należy sprawdzić czy krótkie lub długie teksty alternatywne są dostępne dla wszystkich elementów nietekstowych i możliwie najdokładniej je opisują.",
    "1_2_1_G158": "Treść przedstawiona w sposób dźwiękowy powinna zostać uzupełniona dodatkową transkrypcją lub opisem alternatywnym.",
    "1_2_1_G159,G166": "Jeśli obiekt wideo (bez dźwięku) zamieszczony na stronie nie jest alternatywą dla tekstu, sprawdź czy istnieje do niego alternatywa tekstowa lub ścieżka dźwiękowa prezentująca tę samą treść.",
    "1_2_2_G87,G93": "Jeśli obiekt wideo ze ścieżką audio nie jest alternatywą dla tekstu, sprawdź czy materiał ma napisy dla niesłyszących.",
    "1_2_3_G69,G78,G173,G8": "Jeśli obiekt wideo ze ścieżką audio nie jest alternatywą dla tekstu, sprawdź czy materiał zawiera dodatkowo audiodeskrypcję obrazu i/lub opis alternatywny dla treści przedstawionych wyłącznie w formie obrazu.",
    "1_2_4_G9,G87,G93": "Sprawdź czy materiał wideo prezentowany na żywo ma napisy dla niesłyszących tworzone na żywo.",
    "1_2_5_G78,G173,G8": "Sprawdź czy materiał wideo ma dołączoną audiodeskrypcję obrazu.",
    "1_2_6_G54,G81": "Sprawdź czy materiał wideo ma dołączone tłumaczenie na język migowy.",
    "1_2_7_G8": "Jeśli materiał wideo, nie ma wystarczających pauz, by uzupełnić go o audiodeskrypcję, sprawdź czy zamieszczona jest alternatywna wersja lub rozszerzona ścieżka dźwiękowa.",
    "1_2_8_G69,G159": "Sprawdź czy materiał wideo lub wideo (sam obraz) jest umieszczony wraz z alternatywą tekstową.",
    "1_2_9_G150,G151,G157": "Sprawdź czy material audio przekazywany na żywo jest umieszczony wraz z wersją tekstową tworzoną na żywo.",
    "1_3_1_F92,ARIA4": 'Ten element ma przypisaną rolę "prezentacja" ale zawiera też konkretne treści.',
    "1_3_1_H44.NonExistent": 'Atrybut "for" znacznika <label> zawiera identyfikator pola, które nie istnieje na stronie.',
    "1_3_1_H44.NonExistentFragment": 'Atrybut "for" znacznika <label> zawiera identyfikator pola, które nie istnieje w tym obszarze strony.',
    "1_3_1_H44.NotFormControl": 'Atrybut "for" znacznika <label> zawiera identyfikator, który jest przypisany do elementu nie będącego elementem formulrza. Sprawdź czy identyfikator został umieszczony w odpowiednim znaczniku.',
    "1_3_1_H65": 'Element formularza zawiera atrybut "title" bez treści lub z samymi spacjami / odstępami. Taki title nie będzie uwzględniany jako prawidłowa etykieta.',
    "1_3_1_ARIA6": 'To pole formularza ma atrybut "aria-label" bez treści lub z samymi spacjami / odstępami. Taki atrybut nie będzie uwzględniany jako prawidłowa etykieta.',
    "1_3_1_ARIA16,ARIA9": 'To pole formularza ma atrybut "aria-labelledby. Jednak jego ID "{{id}}" nie istnieje w żadnym elemencie. Taki atrybut nie będzie uwzględniany jako opis pola.',
    "1_3_1_F68.Hidden": "To ukryte pole ma etykietę (opis). Nie ma potrzeby dodawania etykiety do ukrytego pola.",
    "1_3_1_F68.HiddenAttr": 'To pole ma z zasady być ukryte (za pomocą atrybutu "hidden"). Nie ma potrzeby dodawania etykiety do ukrytego pola.',
    "1_3_1_F68": 'Pole formularza powinno posiadać opis bądź etykietę. Zaleca się dodanie atrybutów "title", "aria-label" lub "aria-labelledby" bądź  elementu label (z atrybutem "for" wskajuącym na to pole) .',
    "1_3_1_H49.": "Znaczniki prezentacyjne użyte w kodzie są przestarzałe w HTML5.",
    "1_3_1_H49.AlignAttr": "Align attributes.",
    "1_3_1_H49.Semantic": "Do wyróżnienia tekstu powinny zostać użyte odpowiednie znaczniki.",
    "1_3_1_H49.AlignAttr.Semantic": "Do wyróżnienia tekstu powinny zostać użyte odpowiednie znaczniki.",
    "1_3_1_H42": "Jeśli ten fragment treści miał być nagłówkiem, powinny zostać użyte znaczniki nagłówków (h1 – h6).",
    "1_3_1_H63.3": 'W komórce tabeli użyto niewłaściwy atrybut "scope". Dopuszczalne atrybuty to: "ow", "col", "rowgroup" i "colgroup".',
    "1_3_1_H63.2": "Atrybuty scope używane na komórkach tabeli (<td>) aby oznaczyć nagłówek są przestarzałe w HTML5. Zaleca się skorzystanie ze znacznika <th>.",
    "1_3_1_H43.ScopeAmbiguous": 'Użycie atrybutów scope na elementach th jest niejasne w tabeli z wieloma nagłówkami. Rekomenduje się użycie atrybutu "headers" w znaczniku <td>.',
    "1_3_1_H43.IncorrectAttr": 'Nieprawidłowy atrybut nagłówka w znaczniku <td>. Zamiast "{{actual}}" powinien być "{{expected}}".',
    "1_3_1_H43.IncorrectAttrNotice": "Check that headers attribute on td element is correct.",
    "1_3_1_H43.HeadersRequired": 'Nie zdefiniowano relacji pomiędzy komórką <td> a powiązanym z nią nagłówkiem <th>. Wskazana tabela ma wiele poziomów <th>, zatem należałoby użyć atrybutu "headers" w komórkach <td>.',
    "1_3_1_H43.MissingHeaderIds": 'Nie wszystkie nagłówki th w tej tabeli posiadają atrybut "id" i nie będzie się można do nich odwołać za pomocą atrybutu "headers" w znacznikach <td>.',
    "1_3_1_H43.MissingHeadersAttrs": "Nie wszystkie komórki <td> w tej tabeli posiadają atrybut headers. W atrybucie headers powinny znajdować się identyfikatory powiązanych nagłówków.",
    "1_3_1_H43,H63": 'Komórki <td> nie mają ustalonej relacji z komórkami nagłówkowymi <th>. Należy zdefiniować atryb "scope" dla <th> lub "headers" dla <td>.',
    "1_3_1_H63.1": 'Nie wszystkie komórki <th> w tej tabeli posiadają atrybut "scope". Ten atrybut pozwala powiązać nagłówki <th> z odpowiednimi komórkami <td>.',
    "1_3_1_H73.3.LayoutTable": "Tabela jest prawdopodobnie używana do struktury układu graficznego ale zawiera atrybut summary. Tabele używane do budowania struktury strony nie mieć tego atrybutu.",
    "1_3_1_H39,H73.4": 'Jeśli tabela zawiera treści i zastosowano w niej atrybut "summary" i znacznik <caption>. Treści tego atrybutu i znacznika nie mogą być powielone.',
    "1_3_1_H73.3.Check": 'Jeśli ta tabela zawiera dane, sprawdź czy atrybut "summary" opisuje układ tabeli oraz wyjaśnia jak jej użyć.',
    "1_3_1_H73.3.NoSummary": 'Jeśli ta tabela zawiera dane, rozważ użycie atrybutu "summary" jako podsumowania zawartości tabeli.',
    "1_3_1_H39.3.LayoutTable": "Ta tabela wydaje się być przeznaczona do prezentacji układu strony, ale zawiera opis <caption>. Tabele przeznaczone do układu nie mogą zawierać opisu.",
    "1_3_1_H39.3.Check": "Jeśli ta tabela zawiera dane, sprawdź czy <caption> zawiera jej adekwatny opis.",
    "1_3_1_H39.3.NoCaption": "Jeśli ta tabela zawiera dane, powinna być uzupełniona o opis w znaczniku <caption>.",
    "1_3_1_H71.NoLegend": "Fieldset nie ma opisu w formie <legend>. Wszystkim znacznikom <fieldset> powinny towarzyszyć opisy w znaczniku <legend>.",
    "1_3_1_H85.2": "Jeśli listy wyboru stanowią grupę, powinny być zgrupowane elementem <optgroup>.",
    "1_3_1_H71.SameName": 'Jeśli te pola "checkbox" i "radio" są powiązane, powinny być zgrupowane znacznikiem <fieldset>.',
    "1_3_1_H48.1": "Treść przypomina listę nieuporządkowaną. Jeśli jest to lista nieuporządkowana powinna być oznaczona odpowiednimi znacznikami <ul>.",
    "1_3_1_H48.2": "Treść przypomina listę uporządkowaną. Jeśli jest to lista uporządkowana powinna być oznaczona odpowiednimi znacznikami <ol>.",
    "1_3_1_G141_a": "Kolejność nagłówków nie jest poprawnie uporządkowana. Element h{{headingNum}} umieszczony jest jako pierwszy więc powinien być oznaczony jako h1.",
    "1_3_1_G141_b": "Kolejność nagłówków nie jest poprawnie uporządkowana. Nagłówek h{{headingNum}} powinien być oznaczony jako h{{properHeadingNum}}.",
    "1_3_1_H42.2": "Nagłówek nie posiada tekstu. Tekst, który nie ma funkcji nagłówka nie powinien być oznaczony znacznikami do określania nagłówków.",
    "1_3_1_H48": "Jeśli ten element zawiera nawigację, zaleca się aby został oznaczony jako lista np. przy użyciu listy nieuporządkowanej <ul>.",
    "1_3_1_LayoutTable": "Ta tabela wydaje się być przeznaczona do prezentacji układu strony. Jeśli jest inaczej, powinna zawierać nagłówki pod postacią <th>.",
    "1_3_1_DataTable": 'Jeżeli tabela jest wykorzystywana do tworzenia układu strony, nie powinna posiadać komórek <th> oraz atrybutu "summary" ani znacznika z opisem <caption>.',
    "1_3_2_G57": "Struktura i ułożenie elementów powinny oddawać sens strony i informacji.",
    "1_3_3_G96": "Sprawdź czy przekazane instrukcje nie opierają się tylko na właściwościach postrzegalnych przez zmysły takich jak kształt, wielkość czy umiejscowienie.",
    "1_4_1_G14,G18": "Informacje przekazywane za pomocą kolorów powinny być również zapisywane w treści lub mieć inną postać alternatywną.",
    "1_4_2_F23": "Jeżeli materiał audo włączany jest automatycznie i trwa dłużej niż trzy sekundy należy umożliwić zatrzymanie bądź wyciszenie odtwarzania.",
    "1_4_3_F24.BGColour": "Sprawdź czy kolor tekstu odpowiada pod względem wymagań kontrastu kolorowi lub obrazkowi tła.",
    "1_4_3_F24.FGColour": "Sprawdź czy kolor elementu ma taki kolor tła lub w formie obrazka, który pasuje kontrastowo do elementu inline z tekstem.",
    "1_4_3_G18_or_G145.Abs": "Ten element jest pozycjonowany absolutnie i nie jest możliwe zweryfikowanie jego kontrastu. Sprawdź samodzielnie czy kontrast jest na wystarczającym poziomie: {{required}}:1.",
    "1_4_3_G18_or_G145.BgImage": "Tekst elementu wyświetlany jest na obrazku. Należy upewnić się, że stosunek kontrastu tekstu do tła wynosi co najmniej {{required}}:1.",
    "1_4_3_G18_or_G145.Alpha": "Tekst lub tło tego elementu jest przezroczyste. Upewnij się, że współczynnik kontrastu między tekstem a tłem wynosi co najmniej {{required}}:1.",
    "1_4_3_G18_or_G145.Fail": "Ten element ma niewystarczający na tym poziomie zgodności stosunek kontrastu tekstu do tła. Powinien wynosić co najmniej {{required}}:1, a tekst umieszczony w tym elemencie posiada stosunek {{value}}:1.",
    "1_4_3_G18_or_G145.Fail.Recomendation": "Zalecenie: ",
    "1_4_3_G18_or_G145.Fail.Recomendation.Text": "zmiana koloru tekstu na {{value}}",
    "1_4_3_G18_or_G145.Fail.Recomendation.Background": "zmiana koloru tła na {{value}}",
    "1_4_4_G142": "Należy upewnić się, że tekst na stronie może być powiększony do 200% bez użycia technologii wspomagających.",
    "1_4_5_G140,C22,C30.AALevel": "Sprawdź czy stosowane technologie pozwalają na użycie tekstu w graficznej formie. Treść powinna być przekazana w formie tekstu, chyba że graficzna forma tekstu jest istotna z punktu widzenia samej informacji, która jest przekazywana.",
    "1_4_6_G18_or_G17.Abs": "Ten element jest pozycjonowany absolutnie i nie jest możliwe zweryfikowanie jego kontrastu. Sprawdź samodzielnie czy kontrast jest na wystarczającym poziomie: {{required}}:1.",
    "1_4_6_G18_or_G17.BgImage": "Tekst elementu wyświetlany jest na obrazku. Należy upewnić się, że stosunek kontrastu tekstu do tła wynosi conajmniej {{required}}:1.",
    "1_4_6_G18_or_G17.Fail": "Ten element ma niewystarczający stosunek kontrastu tekstu do tła. Powinien wynosić co najmniej {{required}}:1, a tekst umieszczony w tym elemencie posiada stosunek {{value}}:1.",
    "1_4_6_G18_or_G17.Fail.Recomendation": "Zalecenie: ",
    "1_4_6_G18_or_G17.Fail.Recomendation.Text": "zmiana koloru tekstu na {{value}}",
    "1_4_6_G18_or_G17.Fail.Recomendation.Background": "zmiana koloru tła na {{value}}",
    "1_4_7_G56": "Materiał audio, w którym występuje głównie mowa powinien mieć możliwość wyciszenia dźwięków tła lub narracja powinna być przynajmniej o 4 razy(20dB) głośniejsza niż tło.",
    "1_4_8_G148,G156,G175": "Kolor tekstu oraz kolor tła powinny być możliwe do zmiany przez użytkownika na samej stronie lub poprzez funkcje przeglądarki. ",
    "1_4_8_H87,C20": "Szerokość bloku tekstowego nie powinna przekraczać 80 znaków (40 w przypadku alfabetów: chińskiego, japońskiego i koreańskiego).",
    "1_4_8_C19,G172,G169": "Tekst nie powinien być wyjustowany (tzn. wyrównany do prawego i lewego marginesu). Ewentualnie powinien istnieć mechanizm, który pozwala usunąć wyjustowanie.",
    "1_4_8_G188,C21": "Odstępy między wierszami w akapitach powinny wynosić  przynajmniej 1,5 wysokości linii, a odległość między akapitami powinna być przynajmniej 1,5 razy większa niż ta pomiędzy wierszami. ",
    "1_4_8_H87,G146,C26": "Tekst na stronie powinien mieć możliwość powiększenia do 200% bez użycia technologii wspomagających. Nie powinno być też wymagane scrollowanie dolnym paskiem ekranu przy takim ustawieniu i zmaksymalizowanym oknie przeglądarki.",
    "1_4_9_G140,C22,C30.NoException": "Sprawdź czy teksty w formie grafiki pełnią wyłącznie funkcję dekoracyjną lub „graficzna” prezentacja tekstu ma znaczenie z uwagi na treść przekazywanej informacji.",
    "2_1_1_G90": "Cała treść oraz wszystkie zawarte w niej funkcjonalności powinny być dostępne przy użyciu klawiatury.",
    "2_1_1_SCR20.DblClick": "Funkcjonalność dostępna po dwukrotnym kliknięciu przyciskiem myszy, również powinna być dostępna przy użyciu klawiatury.",
    "2_1_1_SCR20.MouseOver": "Funkcjonalność dostępna po najechaniu kursorem myszy na element, również powinna być dostępna przy użyciu klawiatury.",
    "2_1_1_SCR20.MouseOut": "Funkcjonalność dostępna po opuszczeniu kursorem myszy elementu, również powinna być dostępna przy użyciu klawiatury.",
    "2_1_1_SCR20.MouseMove": "Funkcjonalność dostępna z wykorzystaniem ruchów myszą, również powinna być dostępna przy użyciu klawiatury.",
    "2_1_1_SCR20.MouseDown": "Funkcjonalność dostępna po wciśnięciu przycisku myszy, również powinna być dostępna przy użyciu klawiatury.",
    "2_1_1_SCR20.MouseUp": "Funkcjonalność dostępna po zwolnieniu przycisku myszy, również powinna być dostępna przy użyciu klawiatury.",
    "2_1_2_F10": "Sprawdź czy plugin lub applet pozwalają na uwolnienie fokusu, jeśli przejdzie on do tych funkcjonalności.",
    "2_2_1_F40.2": 'Tag <meta> z atrybutem "redirect" przekierowuje na inną stronę w czesie określonym jako 0. Użytkownicy nie mają kontroli w taki krótkim czasie.',
    "2_2_1_F41.2": 'Tag <meta> z atrybutem "refresh" odświeża aktualną stronę. Użytkownicy nie mają kontroli nad tym odświeżaniem.',
    "2_2_2_SCR33,SCR22,G187,G152,G186,G191": "Jeśli na stronie znajduje się element dynamiczny, animujący się dłużej niż 5 sekund powinien być mechanizm umożliwiający zatrzymanie tego efektu.",
    "2_2_2_F4": "Jeśli element miga dłużej niż 5 sekund powinien być mechanizm, który umożliwi zatrzymanie migania.",
    "2_2_2_F47": "Element <blink> nie spełnia wymagania o zatrzymaniu się migania w czasie 5 sekund.",
    "2_2_3_G5": "Sprawdź czy w serwisie nie występują ograniczenia czasowe, w działaniach użytkownika, chyba że dotyczy to odtwarzania plików multimedialnych lub działań transmitowanych na żywo.",
    "2_2_4_SCR14": "Sprawdź czy wszelkie przerwy lub przeszkody (np. automatyczna aktualizacja treści), mogą być wyłączone lub opóźnione przez użytkownika — chyba, że dotyczy to nagłych przypadków.",
    "2_2_5_G105,G181": "Jeśli użytkownik zostanie wylogowany w trakcie procesu (np. krokowego), powinien mieć możliwość do powrotu do tego samego stanu procesu, w jakim był wcześniej.",
    "2_3_1_G19,G176": "Elementy strony nie mogą błyskać częściej niż trzy razy w ciągu sekundy oraz jednocześnie obszar migający jest jak najmniejszy.",
    "2_3_2_G19": "Elementy strony nie mogą migać częściej niż trzy razy w ciągu sekundy.",
    "2_4_1_H64.1": 'Ramka <iframe> musi posiadać tytuł. Należy wypełnić atrybut "title" i zawrzeć w nim opis ramki.',
    "2_4_1_H64.2": "Tytuł ramki <iframe> powinień opisywać ją w możliwie najdokładniejszy sposób.",
    "2_4_1_G1,G123,G124,H69": "Sprawdź czy użytkownik może pominąć powtarzającą się nawigację. Można to zapewnić przez użycie skip-linków, nagłówków lub punktów orientacyjnych ARIA.",
    "2_4_1_G1,G123,G124.NoSuchID": "Ten link wskazuje identyfikator {{id}} ale takiego identyfikatora w dokumencie nie ma.",
    "2_4_1_G1,G123,G124.NoSuchIDFragment": "Ten link wskazuje identyfikator {{id}} w dokumencie, ale takiego identyfikatora w testowanym obszarze nie ma.",
    "2_4_2_H25.1.NoHeadEl": "Strona nie ma tytułu. Należy dodać znacznik <title> do sekcji nagłówkowej strony.",
    "2_4_2_H25.1.NoTitleEl": "Strona nie ma tytułu. Należy dodać znacznik <title> do sekcji nagłówkowej strony lub wypełnić jego treść.",
    "2_4_2_H25.1.EmptyTitle": "Znacznik <title> w sekcji nagłówkowej strony nie powinien być pusty.",
    "2_4_2_H25.2": "Znacznik <title> w sekcji nagłówkowej strony powinien możliwie najdokładniej opisywać jej zawartość.",
    "2_4_3_H4.2": 'Jeśli został użyty atrybut "tabindex", relacje i następstwo treści są zrozumiałe dla użytkownika.',
    "2_4_4_H77,H78,H79,H80,H81,H33": 'Sprawdź czy treść linku wraz z kontekstem, w którym występuje lub dodatkową treścią w atrybucie "title" pozwala na zrozumienie funkcji / celu linku.',
    "2_4_4_H77,H78,H79,H80,H81": "Sprawdź czy treść linku wraz z kontekstem, w którym występuje pozwala na zrozumienie funkcji / celu linku.",
    "2_4_5_G125,G64,G63,G161,G126,G185": "Jeśli strona nie jest częścią procesu krokowego, sprawdź czy jest więcej niż jeden sposób na dotarcie do tej strony.",
    "2_4_6_G130,G131": "Nagłówki i etykiety powinny opisywać temat i/lub cel treści.",
    "2_4_7_G149,G165,G195,C15,SCR31": "Każdy element możliwy do nawigacji za pomocą klawiatury, ma widoczny wskaźnik fokusu klawiatury.",
    "2_4_8_H59.1": "Znacznik <link> może być umieszczony wyłącznie w sekcji <head>.",
    "2_4_8_H59.2a": 'Znacznik <link> nie ma atrybutu "rel", którego wartość wskazuje na typ i powiązanie linku.',
    "2_4_8_H59.2b": 'Znacznik <link> nie ma adresu w atrybucie "href" — nie prowadzi do żadnego zasobu.',
    "2_4_9_H30": "Sprawdź czy treść linku zrozumiale opisuje jego funkcję.",
    "3_1_1_H57.2": 'Znacznik <html> musi posiadać atrybut "lang" określający język strony.',
    "3_1_1_H57.3.Lang": 'Język zdefiniowany w atrybucie "lang" nie mógł zostać poprawnie zinterpretowany.',
    "3_1_1_H57.3.XmlLang": 'Język zdefiniowany w atrybucie "xml:lang" nie mógł zostać poprawnie zinterpretowany. ',
    "3_1_2_H58": 'Każda zmiana języka w treściach strony powinna być oznaczona atrybutem "lang" lub "xml:lang".',
    "3_1_2_H58.1.Lang": 'Język zdefiniowany w atrybucie "lang" tego elementu nie mógł zostać poprawnie zinterpretowany.',
    "3_1_2_H58.1.XmlLang": 'Język zdefiniowany w atrybucie "xml:lang" tego elementu nie mógł zostać poprawnie zinterpretowany.',
    "3_1_3_H40,H54,H60,G62,G70": "Sprawdź czy jest zapewniony mechanizm, za pomocą którego można sprawdzić definicje słów użytych w nietypowy sposób, co odnosi się też do idiomów i żargonu.",
    "3_1_4_G102,G55,G62,H28,G97": "Sprawdź czy jest zapewniony mechanizm, za pomocą którego można sprawdzić znaczenie skrótów w ich rozwiniętej formie.",
    "3_1_5_G86,G103,G79,G153,G160": "Jeśli dany tekst wymaga umiejętności czytania na poziomie wyższym niż poziom gimnazjalny, powinna być dostępna jego dodatkowa, uproszczona wersja.",
    "3_1_6_H62.1.HTML5": "Element <ruby> nie zawiera znacznika znacznika <rt>, który opisuje sposób wymowy.",
    "3_1_6_H62.1.XHTML11": "Element <ruby> nie zawiera znacznika <rt>, który opisuje sposób wymowy treści umieszczonej wewnątrz znacznika <rb>.",
    "3_1_6_H62.2": "Element <ruby> nie zawiera znacznika <rp>, który zapewnia wsparcie dla przeglądarek niewspierających treści w znacznikach <ruby>.",
    "3_2_1_G107": "Sprawdź czy po przenieseniu fokusu na dany element formularza nie następuje zaskakująca dla użytkownika zmiana kontekstu (np. przeniesienie na inną stronę).",
    "3_2_2_H32.2": 'Formularz nie ma przycisku do zatwierdzania wysyłki. Może to sprawić problem użytkownikom posługującym się wyłącznie klawiaturą. Przycisk może mieć formę elementu <input> z atrybutem "submit" lub "image" lub elementem <button>.',
    "3_2_3_G61": "Sprawdź czy powtarzające się na stronach elementy nawigacyjne są umieszczone w tej samej kolejności. Dopuszczalne jest zmiana kolejności przez samego użytkownika.",
    "3_2_4_G197": "Elementy, które posiadają tę samą funkcjonalność, muszą być zidentyfikowane/oznaczone w ten sam sposób na wszystkich stronach serwisu.",
    "3_2_5_H83.3": "Linki otwierające się w nowym oknie lub karcie przeglądarki powinny mieć taką informację w swojej treści.",
    "3_3_1_G83,G84,G85": "Jeśli przy wpisywaniu informacji, błąd zostanie wykryty automatycznie, system powinien wskazać błędny element, a użytkownik otrzymać opis błędu w postaci tekstu.",
    "3_3_2_G131,G89,G184,H90": "Jeżeli wymagane jest wprowadzenie treści przez użytkownika, powinny być dostępne zrozumiałe instrukcje i wskazówki.",
    "3_3_3_G177": "Jeśli przy wpisywaniu informacji błąd zostanie wykryty automatycznie, użytkownik powinien otrzymać sugestię korekty, chyba że wpłynie to negatywnie na bezpieczeństwo systemu.",
    "3_3_4_G98,G99,G155,G164,G168.LegalForms": "Sprawdź czy użytkownik może sprawdzić i zmienić informacje wprowadzone w formularzu, zanim ostatecznie potwierdzi jego wysłanie. Jest to szczególnie ważne w sytuacji, gdy użytkownik podaje informacje prawne lub finansowe.",
    "3_3_5_G71,G184,G193": "Sprawdź czy w formularzu jest dostępna pomoc kontekstowa na samej stronie lub na stronie służącej do potwierdzenia wprowadzonych treści.",
    "3_3_6_G98,G99,G155,G164,G168.AllForms": "Sprawdź czy użytkownik może sprawdzić i zmienić informacje wprowadzone w formularzu, zanim ostatecznie potwierdzi jego wysłanie.",
    "4_1_1_F77": 'Na stronie znaleziono powieloną wartość "{{id}}". Dopuszczalne jest jedno wystąpienie wartości identyfikatora.',
    "4_1_2_H91.A.Empty": 'Link ma atrybut "id", nie ma jednak ani adresu w atrybucie "href" ani treści. Rozważ przeniesienie identyfikatora do elementu nadrzędnego.',
    "4_1_2_H91.A.EmptyWithName": 'Link ma atrybut "name", ale nie ma ani adresu ani treści. Rozważ przeniesienie wartości atrybutu "name" do identyfikatora elementu nadrzędnego jako "id".',
    "4_1_2_H91.A.EmptyNoId": "Link nie ma treści, ani nazwy ani identyfikatora.",
    "4_1_2_H91.A.NoHref": "Link nie powinien być używany do tworzenia wewnętrznych odniesień na stronie. Jeśli identyfikator jest używany do styli CSS lub oskryptowania JS, rozważ przeniesienie identyfikatora od elementu nadrzędnego (rodzica).",
    "4_1_2_H91.A.Placeholder": 'Link ma jedynie treść. Brakuje adresu w atrybucie "href", identyfikatora ani nazwy (atrybutu "name").',
    "4_1_2_H91.A.NoContent": 'Link ma prawidłowy adres w atrybucie "href" ale nie ma treści linku.',
    "4_1_2_input_element": "pole formularza",
    "4_1_2_element_content": "zawartość elementu",
    "4_1_2_element": "element",
    "4_1_2_msg_pattern": '{{msgNodeType}} nie posiada prawidłowej nazwy (np. atrybutu) dla "accessibility API". Dopuszczalne opcje to: {{builtAttrs}}',
    "4_1_2_msg_pattern_role_of_button": 'element ma rolę "button" ale nie posiada prawidłowej nazwy (np. atrybutu) dla "accessibility API". Dopuszczalne opcje to: {{builtAttrs}}',
    "4_1_2_msg_pattern2": '{{msgNodeType}} nie ma wartości, która mogłaby być dostępna dla "accessibility API".',
    "4_1_2_msg_add_one": "Add one by adding content to the element.",
    "4_1_2_msg_pattern3": "This {{msgNodeType}} does not have an initially selected option. Depending on your HTML version, the value exposed to an accessibility API may be undefined.",
    "4_1_2_value_exposed_using_attribute": "A value is exposed using the {{requiredValue}} attribute.",
    "4_1_2_value_exposed_using_element": "A value is exposed using the {{requiredValue}} element."
};

_global.HTMLCS_Section508 = {
    name: "Section508",
    description: "U.S. Section 508 Standard",
    sniffs: [ "A", "B", "C", "D", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P" ],
    getMsgInfo: function(code) {
        var msgCodeParts = code.split(".", 3);
        var paragraph = msgCodeParts[1].toLowerCase();
        var retval = [ [ "Section", "1194.22 (" + paragraph + ")" ] ];
        return retval;
    }
};

_global.HTMLCS_Section508_Sniffs_A = {
    register: function() {
        return [ "_top", "img", "object", "bgsound", "audio" ];
    },
    process: function(element, top) {
        if (element === top) {
            this.addNullAltTextResults(top);
            this.addMediaAlternativesResults(top);
        } else {
            var nodeName = element.nodeName.toLowerCase();
            if (nodeName === "object" || nodeName === "bgsound" || nodeName === "audio") {
                HTMLCS.addMessage(HTMLCS.NOTICE, element, "For multimedia containing audio only, ensure an alternative is available, such as a full text transcript.", "Audio");
            }
        }
    },
    testNullAltText: function(top) {
        var errors = {
            img: {
                generalAlt: [],
                missingAlt: [],
                ignored: [],
                nullAltWithTitle: [],
                emptyAltInLink: []
            },
            inputImage: {
                generalAlt: [],
                missingAlt: []
            },
            area: {
                generalAlt: [],
                missingAlt: []
            }
        };
        elements = HTMLCS.util.getAllElements(top, 'img, area, input[type="image"]');
        for (var el = 0; el < elements.length; el++) {
            var element = elements[el];
            var nodeName = element.nodeName.toLowerCase();
            var linkOnlyChild = false;
            var missingAlt = false;
            var nullAlt = false;
            if (element.parentNode.nodeName.toLowerCase() === "a") {
                var prevNode = HTMLCS.util.getPreviousSiblingElement(element, null);
                var nextNode = HTMLCS.util.getNextSiblingElement(element, null);
                if (prevNode === null && nextNode === null) {
                    var textContent = element.parentNode.textContent;
                    if (element.parentNode.textContent !== undefined) {
                        var textContent = element.parentNode.textContent;
                    } else {
                        var textContent = element.parentNode.innerText;
                    }
                    if (HTMLCS.util.isStringEmpty(textContent) === true) {
                        linkOnlyChild = true;
                    }
                }
            }
            if (element.hasAttribute("alt") === false) {
                missingAlt = true;
            } else if (!element.getAttribute("alt") || HTMLCS.util.isStringEmpty(element.getAttribute("alt")) === true) {
                nullAlt = true;
            }
            switch (nodeName) {
              case "img":
                if (linkOnlyChild === true && (missingAlt === true || nullAlt === true)) {
                    errors.img.emptyAltInLink.push(element.parentNode);
                } else if (missingAlt === true) {
                    errors.img.missingAlt.push(element);
                } else if (nullAlt === true) {
                    if (element.hasAttribute("title") === true && HTMLCS.util.isStringEmpty(element.getAttribute("title")) === false) {
                        errors.img.nullAltWithTitle.push(element);
                    } else {
                        errors.img.ignored.push(element);
                    }
                } else {
                    errors.img.generalAlt.push(element);
                }
                break;

              case "input":
                if (missingAlt === true || nullAlt === true) {
                    errors.inputImage.missingAlt.push(element);
                } else {
                    errors.inputImage.generalAlt.push(element);
                }
                break;

              case "area":
                if (missingAlt === true || nullAlt === true) {
                    errors.area.missingAlt.push(element);
                } else {
                    errors.inputImage.generalAlt.push(element);
                }
                break;

              default:
                break;
            }
        }
        return errors;
    },
    addNullAltTextResults: function(top) {
        var errors = this.testNullAltText(top);
        for (var i = 0; i < errors.img.emptyAltInLink.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.img.emptyAltInLink[i], "Img element is the only content of the link, but is missing alt text. The alt text should describe the purpose of the link.", "Img.EmptyAltInLink");
        }
        for (var i = 0; i < errors.img.nullAltWithTitle.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.img.nullAltWithTitle[i], "Img element with empty alt text must have absent or empty title attribute.", "Img.NullAltWithTitle");
        }
        for (var i = 0; i < errors.img.ignored.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, errors.img.ignored[i], "Img element is marked so that it is ignored by Assistive Technology.", "Img.Ignored");
        }
        for (var i = 0; i < errors.img.missingAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.img.missingAlt[i], "Img element missing an alt attribute. Use the alt attribute to specify a short text alternative.", "Img.MissingAlt");
        }
        for (var i = 0; i < errors.img.generalAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.NOTICE, errors.img.generalAlt[i], "Ensure that the img element's alt text serves the same purpose and presents the same information as the image.", "Img.GeneralAlt");
        }
        for (var i = 0; i < errors.inputImage.missingAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.inputImage.missingAlt[i], "Image submit button missing an alt attribute. Specify a text alternative that describes the button's function, using the alt attribute.", "InputImage.MissingAlt");
        }
        for (var i = 0; i < errors.inputImage.generalAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.NOTICE, errors.inputImage.generalAlt[i], "Ensure that the image submit button's alt text identifies the purpose of the button.", "InputImage.GeneralAlt");
        }
        for (var i = 0; i < errors.area.missingAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.area.missingAlt[i], "Area element in an image map missing an alt attribute. Each area element must have a text alternative that describes the function of the image map area.", "Area.MissingAlt");
        }
        for (var i = 0; i < errors.area.generalAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.NOTICE, errors.area.generalAlt[i], "Ensure that the area element's text alternative serves the same purpose as the part of image map image it references.", "Area.GeneralAlt");
        }
    },
    testMediaTextAlternatives: function(top) {
        var errors = {
            object: {
                missingBody: [],
                generalAlt: []
            },
            applet: {
                missingBody: [],
                missingAlt: [],
                generalAlt: []
            }
        };
        var elements = HTMLCS.util.getAllElements(top, "object");
        for (var el = 0; el < elements.length; el++) {
            var element = elements[el];
            var childObject = element.querySelector("object");
            if (childObject === null) {
                var textAlt = HTMLCS.util.getElementTextContent(element, true);
                if (textAlt === "") {
                    errors.object.missingBody.push(element);
                } else {
                    errors.object.generalAlt.push(element);
                }
            }
        }
        var elements = HTMLCS.util.getAllElements(top, "applet");
        for (var el = 0; el < elements.length; el++) {
            var childObject = element.querySelector("object");
            var hasError = false;
            if (childObject === null) {
                var textAlt = HTMLCS.util.getElementTextContent(element, true);
                if (HTMLCS.util.isStringEmpty(textAlt) === true) {
                    errors.applet.missingBody.push(element);
                    hasError = true;
                }
            }
            var altAttr = element.getAttribute("alt") || "";
            if (HTMLCS.util.isStringEmpty(altAttr) === true) {
                errors.applet.missingAlt.push(element);
                hasError = true;
            }
            if (hasError === false) {
                errors.applet.generalAlt.push(element);
            }
        }
        return errors;
    },
    addMediaAlternativesResults: function(top) {
        var errors = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1.testMediaTextAlternatives(top);
        for (var i = 0; i < errors.object.missingBody.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.object.missingBody[i], "Object elements must contain a text alternative after all other alternatives are exhausted.", "Object.MissingBody");
        }
        for (var i = 0; i < errors.object.generalAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.NOTICE, errors.object.generalAlt[i], "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.", "Object.GeneralAlt");
        }
        for (var i = 0; i < errors.applet.missingBody.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.applet.missingBody[i], "Applet elements must contain a text alternative in the element's body, for browsers without support for the applet element.", "Applet.MissingBody");
        }
        for (var i = 0; i < errors.applet.missingAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.applet.missingAlt[i], "Applet elements must contain an alt attribute, to provide a text alternative to browsers supporting the element but are unable to load the applet.", "Applet.MissingAlt");
        }
        for (var i = 0; i < errors.applet.generalAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.NOTICE, errors.applet.generalAlt[i], "Check that short (and if appropriate, long) text alternatives are available for non-text content that serve the same purpose and present the same information.", "Applet.GeneralAlt");
        }
    }
};

_global.HTMLCS_Section508_Sniffs_B = {
    register: function() {
        return [ "object", "applet", "embed", "video" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, "For multimedia containing video, ensure a synchronised audio description or text alternative for the video portion is provided.", "Video");
        HTMLCS.addMessage(HTMLCS.NOTICE, element, "For multimedia containing synchronised audio and video, ensure synchronised captions are provided for the audio portion.", "Captions");
    }
};

_global.HTMLCS_Section508_Sniffs_C = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, "Ensure that any information conveyed using colour alone is also available without colour, such as through context or markup.", "Colour");
    }
};

_global.HTMLCS_Section508_Sniffs_D = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        if (element === top) {
            HTMLCS.addMessage(HTMLCS.NOTICE, top, "Ensure that content is ordered in a meaningful sequence when linearised, such as when style sheets are disabled.", "Linearised");
            this.testPresentationMarkup(top);
            this.testHeadingOrder(top);
            var hasScript = HTMLCS.util.getAllElements(top, 'script, link[rel="stylesheet"]');
            if (hasScript.length > 0) {
                HTMLCS.addMessage(HTMLCS.NOTICE, top, 'If content is hidden and made visible using scripting (such as "click to expand" sections), ensure this content is readable when scripts and style sheets are disabled.', "HiddenText");
            }
        }
    },
    testPresentationMarkup: function(top) {
        _global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1.testPresentationMarkup(top);
    },
    testHeadingOrder: function(top) {
        var lastHeading = 0;
        var headings = HTMLCS.util.getAllElements(top, "h1, h2, h3, h4, h5, h6");
        for (var i = 0; i < headings.length; i++) {
            var headingNum = parseInt(headings[i].nodeName.substr(1, 1));
            if (headingNum - lastHeading > 1) {
                var exampleMsg = "should be an h" + (lastHeading + 1) + " to be properly nested";
                if (lastHeading === 0) {
                    exampleMsg = "appears to be the primary document heading, so should be an h1 element";
                }
                HTMLCS.addMessage(HTMLCS.ERROR, headings[i], "The heading structure is not logically nested. This h" + headingNum + " element " + exampleMsg + ".", "HeadingOrder");
            }
            lastHeading = headingNum;
        }
    }
};

_global.HTMLCS_Section508_Sniffs_G = {
    register: function() {
        return [ "table" ];
    },
    process: function(element, top) {
        if (HTMLCS.util.isLayoutTable(element) === true) {
            HTMLCS.addMessage(HTMLCS.NOTICE, element, "This table has no headers. If this is a data table, ensure row and column headers are identified using th elements.", "TableHeaders");
        }
    }
};

_global.HTMLCS_Section508_Sniffs_H = {
    register: function() {
        return [ "table" ];
    },
    process: function(table, top) {
        var headersAttr = HTMLCS.util.testTableHeaders(table);
        for (var i = 0; i < headersAttr.wrongHeaders.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, headersAttr.wrongHeaders[i].element, 'Incorrect headers attribute on this td element. Expected "' + headersAttr.wrongHeaders[i].expected + '" but found "' + headersAttr.wrongHeaders[i].actual + '"', "IncorrectHeadersAttr");
        }
        if (headersAttr.required === true && headersAttr.allowScope === false) {
            if (headersAttr.used === false) {
                HTMLCS.addMessage(HTMLCS.ERROR, table, "The relationship between td elements and their associated th elements is not defined. As this table has multiple levels of th elements, you must use the headers attribute on td elements.", "MissingHeadersAttrs");
            } else {
                if (headersAttr.missingThId.length > 0) {
                    HTMLCS.addMessage(HTMLCS.ERROR, table, "Not all th elements in this table contain an id attribute. These cells should contain ids so that they may be referenced by td elements' headers attributes.", "MissingHeaderIds");
                }
                if (headersAttr.missingTd.length > 0) {
                    HTMLCS.addMessage(HTMLCS.ERROR, table, "Not all td elements in this table contain a headers attribute. Each headers attribute should list the ids of all th elements associated with that cell.", "IncompleteHeadersAttrs");
                }
            }
        }
    }
};

_global.HTMLCS_Section508_Sniffs_I = {
    register: function() {
        return [ "frame", "iframe", "object" ];
    },
    process: function(element, top) {
        var nodeName = element.nodeName.toLowerCase();
        var hasTitle = element.hasAttribute("title");
        var titleEmpty = true;
        if (hasTitle === true) {
            titleEmpty = HTMLCS.util.isStringEmpty(element.getAttribute("title"));
        }
        if (titleEmpty === true) {
            HTMLCS.addMessage(HTMLCS.ERROR, top, "This " + nodeName + " element is missing title text. Frames should be titled with text that facilitates frame identification and navigation.", "Frames");
        }
    }
};

_global.HTMLCS_Section508_Sniffs_J = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, "Check that no component of the content flickers at a rate of greater than 2 and less than 55 times per second.", "Flicker");
    }
};

_global.HTMLCS_Section508_Sniffs_K = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, "If this page cannot be made compliant, a text-only page with equivalent information or functionality should be provided. The alternative page needs to be updated in line with this page's content.", "AltVersion");
    }
};

_global.HTMLCS_Section508_Sniffs_L = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        if (element === top) {
            this.addProcessLinksMessages(top);
            this.testKeyboard(top);
        }
    },
    addProcessLinksMessages: function(top) {
        var errors = this.processLinks(top);
        for (var i = 0; i < errors.emptyNoId.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.emptyNoId[i], "Anchor element found with no link content and no name and/or ID attribute.", "EmptyAnchorNoId");
        }
        for (var i = 0; i < errors.placeholder.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, errors.placeholder[i], "Anchor element found with link content, but no href, ID, or name attribute has been supplied.", "PlaceholderAnchor");
        }
        for (var i = 0; i < errors.noContent.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.noContent[i], "Anchor element found with a valid href attribute, but no link content has been supplied.", "NoContentAnchor");
        }
    },
    processLinks: function(top) {
        var errors = {
            empty: [],
            emptyWithName: [],
            emptyNoId: [],
            noHref: [],
            placeholder: [],
            noContent: []
        };
        var elements = HTMLCS.util.getAllElements(top, "a");
        for (var el = 0; el < elements.length; el++) {
            var element = elements[el];
            var hrefFound = false;
            var content = HTMLCS.util.getElementTextContent(element);
            if (element.hasAttribute("href") === true && /^\s*$/.test(element.getAttribute("href")) === false) {
                hrefFound = true;
            }
            if (hrefFound === false) {
                if (/^\s*$/.test(content) === true) {
                    if (element.hasAttribute("id") === true) {
                        errors.empty.push(element);
                    } else if (element.hasAttribute("name") === true) {
                        errors.emptyWithName.push(element);
                    } else {
                        errors.emptyNoId.push(element);
                    }
                } else {
                    if (element.hasAttribute("id") === true || element.hasAttribute("name") === true) {
                        errors.noHref.push(element);
                    } else {
                        errors.placeholder.push(element);
                    }
                }
            } else {
                if (/^\s*$/.test(content) === true) {
                    if (element.querySelectorAll("img").length === 0) {
                        errors.noContent.push(element);
                    }
                }
            }
        }
        return errors;
    },
    testKeyboard: function(top) {
        var dblClickEls = HTMLCS.util.getAllElements(top, "*[ondblclick]");
        for (var i = 0; i < dblClickEls.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, dblClickEls[i], "Ensure the functionality provided by double-clicking on this element is available through the keyboard.", "DblClick");
        }
        var mouseOverEls = HTMLCS.util.getAllElements(top, "*[onmouseover]");
        for (var i = 0; i < mouseOverEls.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, mouseOverEls[i], "Ensure the functionality provided by mousing over this element is available through the keyboard; for instance, using the focus event.", "MouseOver");
        }
        var mouseOutEls = HTMLCS.util.getAllElements(top, "*[onmouseout]");
        for (var i = 0; i < mouseOutEls.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, mouseOutEls[i], "Ensure the functionality provided by mousing out of this element is available through the keyboard; for instance, using the blur event.", "MouseOut");
        }
        var mouseMoveEls = HTMLCS.util.getAllElements(top, "*[onmousemove]");
        for (var i = 0; i < mouseMoveEls.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, mouseMoveEls[i], "Ensure the functionality provided by moving the mouse on this element is available through the keyboard.", "MouseMove");
        }
        var mouseDownEls = HTMLCS.util.getAllElements(top, "*[onmousedown]");
        for (var i = 0; i < mouseDownEls.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, mouseDownEls[i], "Ensure the functionality provided by mousing down on this element is available through the keyboard; for instance, using the keydown event.", "MouseDown");
        }
        var mouseUpEls = HTMLCS.util.getAllElements(top, "*[onmouseup]");
        for (var i = 0; i < mouseUpEls.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, mouseUpEls[i], "Ensure the functionality provided by mousing up on this element is available through the keyboard; for instance, using the keyup event.", "MouseUp");
        }
    }
};

_global.HTMLCS_Section508_Sniffs_M = {
    register: function() {
        return [ "object", "applet", "bgsound", "embed", "audio", "video" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, "If external media requires a plugin or application to view, ensure a link is provided to a plugin or application that complies with Section 508 accessibility requirements for applications.", "PluginLink");
    }
};

_global.HTMLCS_Section508_Sniffs_N = {
    register: function() {
        return [ "form" ];
    },
    process: function(element, top) {
        var nodeName = element.nodeName.toLowerCase();
        if (nodeName === "form") {
            HTMLCS.addMessage(HTMLCS.NOTICE, element, "If an input error is automatically detected in this form, check that the item(s) in error are identified and the error(s) are described to the user in text.", "Errors");
            HTMLCS.addMessage(HTMLCS.NOTICE, element, "Check that descriptive labels or instructions (including for required fields) are provided for user input in this form.", "Labels");
            HTMLCS.addMessage(HTMLCS.NOTICE, element, "Ensure that this form can be navigated using the keyboard and other accessibility tools.", "KeyboardNav");
        }
    }
};

_global.HTMLCS_Section508_Sniffs_O = {
    register: function() {
        return [ "_top", "a", "area" ];
    },
    process: function(element, top) {
        if (element === top) {
            HTMLCS.addMessage(HTMLCS.NOTICE, top, "Ensure that any common navigation elements can be bypassed; for instance, by use of skip links, header elements, or ARIA landmark roles.", "SkipLinks");
        } else {
            if (element.hasAttribute("href") === true) {
                var href = element.getAttribute("href");
                href = HTMLCS.util.trim(href);
                if (href.length > 1 && href.charAt(0) === "#") {
                    var id = href.substr(1);
                    try {
                        var doc = top;
                        if (doc.ownerDocument) {
                            doc = doc.ownerDocument;
                        }
                        var target = doc.getElementById(id);
                        if (target === null) {
                            target = doc.querySelector('a[name="' + id + '"]');
                        }
                        if (target === null || HTMLCS.util.contains(top, target) === false) {
                            if (HTMLCS.isFullDoc(top) === true || top.nodeName.toLowerCase() === "body") {
                                HTMLCS.addMessage(HTMLCS.ERROR, element, 'This link points to a named anchor "' + id + '" within the document, but no anchor exists with that name.', "NoSuchID");
                            } else {
                                HTMLCS.addMessage(HTMLCS.WARNING, element, 'This link points to a named anchor "' + id + '" within the document, but no anchor exists with that name in the fragment tested.', "NoSuchIDFragment");
                            }
                        }
                    } catch (ex) {}
                }
            }
        }
    }
};

_global.HTMLCS_Section508_Sniffs_P = {
    register: function() {
        return [ "_top", "meta" ];
    },
    process: function(element, top) {
        if (element === top) {
            HTMLCS.addMessage(HTMLCS.NOTICE, top, "If a timed response is required on this page, alert the user and provide sufficient time to allow them to indicate that more time is required.", "TimeLimit");
        } else {
            if (element.hasAttribute("http-equiv") === true) {
                if (String(element.getAttribute("http-equiv")).toLowerCase() === "refresh") {
                    if (/^[1-9]\d*/.test(element.getAttribute("content").toLowerCase()) === true) {
                        if (/url=/.test(element.getAttribute("content").toLowerCase()) === true) {
                            HTMLCS.addMessage(HTMLCS.ERROR, element, "Meta refresh tag used to redirect to another page, with a time limit that is not zero. Users cannot control this time limit.", "MetaRedirect");
                        } else {
                            HTMLCS.addMessage(HTMLCS.ERROR, element, "Meta refresh tag used to refresh the current page. Users cannot control the time limit for this refresh.", "MetaRefresh");
                        }
                    }
                }
            }
        }
    }
};

_global.HTMLCS_WCAG2A = {
    name: "WCAG2A",
    description: "Web Content Accessibility Guidelines (WCAG) 2.1 A",
    sniffs: [ {
        standard: "WCAG2AAA",
        include: [ "Principle1.Guideline1_1.1_1_1", "Principle1.Guideline1_2.1_2_1", "Principle1.Guideline1_2.1_2_2", "Principle1.Guideline1_2.1_2_3", "Principle1.Guideline1_3.1_3_1", "Principle1.Guideline1_3.1_3_1_A", "Principle1.Guideline1_3.1_3_2", "Principle1.Guideline1_3.1_3_3", "Principle1.Guideline1_4.1_4_1", "Principle1.Guideline1_4.1_4_2", "Principle2.Guideline2_1.2_1_1", "Principle2.Guideline2_1.2_1_2", "Principle2.Guideline2_1.2_1_4", "Principle2.Guideline2_2.2_2_1", "Principle2.Guideline2_2.2_2_2", "Principle2.Guideline2_3.2_3_1", "Principle2.Guideline2_4.2_4_1", "Principle2.Guideline2_4.2_4_2", "Principle2.Guideline2_4.2_4_3", "Principle2.Guideline2_4.2_4_4", "Principle2.Guideline2_5.2_5_1", "Principle2.Guideline2_5.2_5_2", "Principle2.Guideline2_5.2_5_3", "Principle2.Guideline2_5.2_5_4", "Principle3.Guideline3_1.3_1_1", "Principle3.Guideline3_2.3_2_1", "Principle3.Guideline3_2.3_2_2", "Principle3.Guideline3_3.3_3_1", "Principle3.Guideline3_3.3_3_2", "Principle4.Guideline4_1.4_1_1", "Principle4.Guideline4_1.4_1_2" ]
    } ],
    getMsgInfo: function(code) {
        return HTMLCS_WCAG2AAA.getMsgInfo(code);
    }
};

_global.HTMLCS_WCAG2AA = {
    name: "WCAG2AA",
    description: "Web Content Accessibility Guidelines (WCAG) 2.1 AA",
    sniffs: [ {
        standard: "WCAG2AAA",
        include: [ "Principle1.Guideline1_1.1_1_1", "Principle1.Guideline1_2.1_2_1", "Principle1.Guideline1_2.1_2_2", "Principle1.Guideline1_2.1_2_4", "Principle1.Guideline1_2.1_2_5", "Principle1.Guideline1_3.1_3_1", "Principle1.Guideline1_3.1_3_1_A", "Principle1.Guideline1_3.1_3_2", "Principle1.Guideline1_3.1_3_3", "Principle1.Guideline1_3.1_3_4", "Principle1.Guideline1_3.1_3_5", "Principle1.Guideline1_4.1_4_1", "Principle1.Guideline1_4.1_4_2", "Principle1.Guideline1_4.1_4_3", "Principle1.Guideline1_4.1_4_3_F24", "Principle1.Guideline1_4.1_4_3_Contrast", "Principle1.Guideline1_4.1_4_4", "Principle1.Guideline1_4.1_4_5", "Principle1.Guideline1_4.1_4_10", "Principle1.Guideline1_4.1_4_11", "Principle1.Guideline1_4.1_4_12", "Principle1.Guideline1_4.1_4_13", "Principle2.Guideline2_1.2_1_1", "Principle2.Guideline2_1.2_1_2", "Principle2.Guideline2_1.2_1_4", "Principle2.Guideline2_2.2_2_1", "Principle2.Guideline2_2.2_2_2", "Principle2.Guideline2_3.2_3_1", "Principle2.Guideline2_4.2_4_1", "Principle2.Guideline2_4.2_4_2", "Principle2.Guideline2_4.2_4_3", "Principle2.Guideline2_4.2_4_4", "Principle2.Guideline2_4.2_4_5", "Principle2.Guideline2_4.2_4_6", "Principle2.Guideline2_4.2_4_7", "Principle2.Guideline2_5.2_5_1", "Principle2.Guideline2_5.2_5_2", "Principle2.Guideline2_5.2_5_3", "Principle2.Guideline2_5.2_5_4", "Principle3.Guideline3_1.3_1_1", "Principle3.Guideline3_1.3_1_2", "Principle3.Guideline3_2.3_2_1", "Principle3.Guideline3_2.3_2_2", "Principle3.Guideline3_2.3_2_3", "Principle3.Guideline3_2.3_2_4", "Principle3.Guideline3_3.3_3_1", "Principle3.Guideline3_3.3_3_2", "Principle3.Guideline3_3.3_3_3", "Principle3.Guideline3_3.3_3_4", "Principle4.Guideline4_1.4_1_1", "Principle4.Guideline4_1.4_1_2", "Principle4.Guideline4_1.4_1_3" ]
    } ],
    getMsgInfo: function(code) {
        return HTMLCS_WCAG2AAA.getMsgInfo(code);
    }
};

_global.HTMLCS_WCAG2AAA = {
    name: "WCAG2AAA",
    description: "Web Content Accessibility Guidelines (WCAG) 2.1 AAA",
    sniffs: [ "Principle1.Guideline1_1.1_1_1", "Principle1.Guideline1_2.1_2_1", "Principle1.Guideline1_2.1_2_2", "Principle1.Guideline1_2.1_2_4", "Principle1.Guideline1_2.1_2_5", "Principle1.Guideline1_2.1_2_6", "Principle1.Guideline1_2.1_2_7", "Principle1.Guideline1_2.1_2_8", "Principle1.Guideline1_2.1_2_9", "Principle1.Guideline1_3.1_3_1", "Principle1.Guideline1_3.1_3_1_AAA", "Principle1.Guideline1_3.1_3_2", "Principle1.Guideline1_3.1_3_3", "Principle1.Guideline1_3.1_3_4", "Principle1.Guideline1_3.1_3_5", "Principle1.Guideline1_3.1_3_6", "Principle1.Guideline1_4.1_4_1", "Principle1.Guideline1_4.1_4_2", "Principle1.Guideline1_4.1_4_3_F24", "Principle1.Guideline1_4.1_4_3_Contrast", "Principle1.Guideline1_4.1_4_6", "Principle1.Guideline1_4.1_4_7", "Principle1.Guideline1_4.1_4_8", "Principle1.Guideline1_4.1_4_9", "Principle1.Guideline1_4.1_4_10", "Principle1.Guideline1_4.1_4_11", "Principle1.Guideline1_4.1_4_12", "Principle1.Guideline1_4.1_4_13", "Principle2.Guideline2_1.2_1_1", "Principle2.Guideline2_1.2_1_2", "Principle2.Guideline2_1.2_1_4", "Principle2.Guideline2_2.2_2_2", "Principle2.Guideline2_2.2_2_3", "Principle2.Guideline2_2.2_2_4", "Principle2.Guideline2_2.2_2_5", "Principle2.Guideline2_2.2_2_6", "Principle2.Guideline2_3.2_3_2", "Principle2.Guideline2_3.2_3_3", "Principle2.Guideline2_4.2_4_1", "Principle2.Guideline2_4.2_4_2", "Principle2.Guideline2_4.2_4_3", "Principle2.Guideline2_4.2_4_5", "Principle2.Guideline2_4.2_4_6", "Principle2.Guideline2_4.2_4_7", "Principle2.Guideline2_4.2_4_8", "Principle2.Guideline2_4.2_4_9", "Principle2.Guideline2_5.2_5_1", "Principle2.Guideline2_5.2_5_2", "Principle2.Guideline2_5.2_5_3", "Principle2.Guideline2_5.2_5_4", "Principle2.Guideline2_5.2_5_5", "Principle2.Guideline2_5.2_5_6", "Principle3.Guideline3_1.3_1_1", "Principle3.Guideline3_1.3_1_2", "Principle3.Guideline3_1.3_1_3", "Principle3.Guideline3_1.3_1_4", "Principle3.Guideline3_1.3_1_5", "Principle3.Guideline3_1.3_1_6", "Principle3.Guideline3_2.3_2_1", "Principle3.Guideline3_2.3_2_2", "Principle3.Guideline3_2.3_2_3", "Principle3.Guideline3_2.3_2_4", "Principle3.Guideline3_2.3_2_5", "Principle3.Guideline3_3.3_3_1", "Principle3.Guideline3_3.3_3_2", "Principle3.Guideline3_3.3_3_3", "Principle3.Guideline3_3.3_3_5", "Principle3.Guideline3_3.3_3_6", "Principle4.Guideline4_1.4_1_1", "Principle4.Guideline4_1.4_1_2", "Principle4.Guideline4_1.4_1_3" ],
    getMsgInfo: function(code) {
        var principles = {
            Principle1: {
                name: "Perceivable",
                link: "http://www.w3.org/TR/WCAG21/#perceivable"
            },
            Principle2: {
                name: "Operable",
                link: "http://www.w3.org/TR/WCAG21/#operable"
            },
            Principle3: {
                name: "Understandable",
                link: "http://www.w3.org/TR/WCAG21/#understandable"
            },
            Principle4: {
                name: "Robust",
                link: "http://www.w3.org/TR/WCAG21/#robust"
            }
        };
        var successCritList = {
            CR2: {
                name: "Full pages",
                landmark: "cc2",
                priority: 0
            },
            CR3: {
                name: "Complete processes",
                landmark: "cc3",
                priority: 0
            },
            CR4: {
                name: "Only Accessibility-Supported Ways of Using Technologies",
                landmark: "cc4",
                priority: 0
            },
            CR5: {
                name: "Non-Interference",
                landmark: "cc5",
                priority: 0
            },
            "1.1.1": {
                name: "Non-Text Content",
                landmark: "non-text-content",
                priority: 1
            },
            "1.2.1": {
                name: "Audio-only and Video-only (Prerecorded)",
                landmark: "audio-only-and-video-only-prerecorded",
                priority: 1
            },
            "1.2.2": {
                name: "Captions (Prerecorded)",
                landmark: "captions-prerecorded",
                priority: 1
            },
            "1.2.3": {
                name: "Audio Description or Media Alternative (Prerecorded)",
                landmark: "audio-description-or-media-alternative-prerecorded",
                priority: 1
            },
            "1.2.4": {
                name: "Captions (Live)",
                landmark: "captions-live",
                priority: 2
            },
            "1.2.5": {
                name: "Audio Description (Prerecorded)",
                landmark: "audio-description-prerecorded",
                priority: 2
            },
            "1.2.6": {
                name: "Sign Language (Prerecorded)",
                landmark: "sign-language-prerecorded",
                priority: 3
            },
            "1.2.7": {
                name: "Extended Audio Description (Prerecorded)",
                landmark: "extended-audio-description-prerecorded",
                priority: 3
            },
            "1.2.8": {
                name: "Media Alternative (Prerecorded)",
                landmark: "media-alternative-prerecorded",
                priority: 3
            },
            "1.2.9": {
                name: "Audio-only (Live)",
                landmark: "audio-only-live",
                priority: 3
            },
            "1.3.1": {
                name: "Info and Relationships",
                landmark: "info-and-relationships",
                priority: 1
            },
            "1.3.2": {
                name: "Meaningful Sequence",
                landmark: "meaningful-sequence",
                priority: 1
            },
            "1.3.3": {
                name: "Sensory Characteristics",
                landmark: "sensory-characteristics",
                priority: 1
            },
            "1.3.4": {
                name: "Orientation",
                landmark: "orientation",
                priority: 2
            },
            "1.3.5": {
                name: "Identify Input Purpose",
                landmark: "identify-input-purpose",
                priority: 2
            },
            "1.3.6": {
                name: "Identify Purpose",
                landmark: "identify-purpose",
                priority: 3
            },
            "1.4.1": {
                name: "Use of Colour",
                landmark: "use-of-color",
                priority: 1
            },
            "1.4.2": {
                name: "Audio Control",
                landmark: "audio-control",
                priority: 1
            },
            "1.4.3": {
                name: "Contrast (Minimum)",
                landmark: "contrast-minimum",
                priority: 1
            },
            "1.4.4": {
                name: "Resize Text",
                landmark: "resize-text",
                priority: 1
            },
            "1.4.5": {
                name: "Images of Text",
                landmark: "images-of-text",
                priority: 1
            },
            "1.4.6": {
                name: "Contrast (Enhanced)",
                landmark: "contrast-enhanced",
                priority: 3
            },
            "1.4.7": {
                name: "Low or No Background Audio",
                landmark: "low-or-no-background-audio",
                priority: 3
            },
            "1.4.8": {
                name: "Visual Presentation",
                landmark: "visual--presentation",
                priority: 3
            },
            "1.4.9": {
                name: "Images of Text (No Exception)",
                landmark: "images-of-text-no-exception",
                priority: 3
            },
            "1.4.10": {
                name: "Reflow",
                landmark: "reflow",
                priority: 2
            },
            "1.4.11": {
                name: "Non-text Contrast",
                landmark: "non-text-contrast",
                priority: 2
            },
            "1.4.12": {
                name: "Text Spacing",
                landmark: "text-spacing",
                priority: 2
            },
            "1.4.13": {
                name: "Content on Hover or Focus",
                landmark: "content-on-hover-or-focus",
                priority: 2
            },
            "2.1.1": {
                name: "Keyboard",
                landmark: "keyboard",
                priority: 1
            },
            "2.1.2": {
                name: "No Keyboard Trap",
                landmark: "no-keyboard-trap",
                priority: 1
            },
            "2.1.3": {
                name: "Keyboard (No Exception)",
                landmark: "keyboard-no-exception",
                priority: 3
            },
            "2.1.4": {
                name: "Character Key Shortcuts",
                landmark: "character-key-shortcuts",
                priority: 1
            },
            "2.2.1": {
                name: "Timing Adjustable",
                landmark: "timing-adjustable",
                priority: 1
            },
            "2.2.2": {
                name: "Pause, Stop, Hide",
                landmark: "pause-stop-hide",
                priority: 1
            },
            "2.2.3": {
                name: "No Timing",
                landmark: "no-timing",
                priority: 3
            },
            "2.2.4": {
                name: "Interruptions",
                landmark: "interruptions",
                priority: 3
            },
            "2.2.5": {
                name: "Re-authenticating",
                landmark: "re-authenticating",
                priority: 3
            },
            "2.2.6": {
                name: "Timeouts",
                landmark: "timeouts",
                priority: 3
            },
            "2.3.1": {
                name: "Three Flashes or Below Threshold",
                landmark: "three-flashes-or-below-threshold",
                priority: 1
            },
            "2.3.2": {
                name: "Three Flashes",
                landmark: "three-flashes",
                priority: 3
            },
            "2.3.3": {
                name: "Animation from Interactions",
                landmark: "animation-from-interactions",
                priority: 3
            },
            "2.4.1": {
                name: "Bypass Blocks",
                landmark: "bypass-blocks",
                priority: 1
            },
            "2.4.2": {
                name: "Page Titled",
                landmark: "page-titled",
                priority: 1
            },
            "2.4.3": {
                name: "Focus Order",
                landmark: "focus-order",
                priority: 1
            },
            "2.4.4": {
                name: "Link Purpose (In Context)",
                landmark: "link-purpose-in-context",
                priority: 1
            },
            "2.4.5": {
                name: "Multiple Ways",
                landmark: "multiple-ways",
                priority: 2
            },
            "2.4.6": {
                name: "Headings and Labels",
                landmark: "headings-and-labels",
                priority: 2
            },
            "2.4.7": {
                name: "Focus Visible",
                landmark: "focus-visible",
                priority: 2
            },
            "2.4.8": {
                name: "Location",
                landmark: "location",
                priority: 3
            },
            "2.4.9": {
                name: "Link Purpose (Link Only)",
                landmark: "link-purpose-link-only",
                priority: 3
            },
            "2.4.10": {
                name: "Section Headings",
                landmark: "section-headings",
                priority: 3
            },
            "2.5.1": {
                name: "Pointer Gestures",
                landmark: "pointer-gestures",
                priority: 1
            },
            "2.5.2": {
                name: "Pointer Cancellation",
                landmark: "pointer-cancellation",
                priority: 1
            },
            "2.5.3": {
                name: "Label In Name",
                landmark: "label-in-name",
                priority: 1
            },
            "2.5.4": {
                name: "Motion Actuation",
                landmark: "motion-actuation",
                priority: 1
            },
            "2.5.5": {
                name: "Target Size",
                landmark: "target-size",
                priority: 3
            },
            "2.5.6": {
                name: "Concurrent Input Mechanisms",
                landmark: "concurrent-input-mechanisms",
                priority: 3
            },
            "3.1.1": {
                name: "Language of Page",
                landmark: "language-of-page",
                priority: 1
            },
            "3.1.2": {
                name: "Language of Parts",
                landmark: "language-of-parts",
                priority: 2
            },
            "3.1.3": {
                name: "Unusual Words",
                landmark: "unusual-words",
                priority: 3
            },
            "3.1.4": {
                name: "Abbreviations",
                landmark: "abbreviations",
                priority: 3
            },
            "3.1.5": {
                name: "Reading Level",
                landmark: "reading-level",
                priority: 3
            },
            "3.1.6": {
                name: "Pronunciation",
                landmark: "pronunciation",
                priority: 3
            },
            "3.2.1": {
                name: "On Focus",
                landmark: "on-focus",
                priority: 1
            },
            "3.2.2": {
                name: "On Input",
                landmark: "on-input",
                priority: 1
            },
            "3.2.3": {
                name: "Consistent Navigation",
                landmark: "consistent-navigation",
                priority: 2
            },
            "3.2.4": {
                name: "Consistent Identification",
                landmark: "consistent-identification",
                priority: 2
            },
            "3.2.5": {
                name: "Change on Request",
                landmark: "change-on-request",
                priority: 3
            },
            "3.3.1": {
                name: "Error Identification",
                landmark: "error-identification",
                priority: 1
            },
            "3.3.2": {
                name: "Labels or Instructions",
                landmark: "labels-or-instructions",
                priority: 1
            },
            "3.3.3": {
                name: "Error Suggestion",
                landmark: "error-suggestion",
                priority: 2
            },
            "3.3.4": {
                name: "Error Prevention (Legal, Financial, Data)",
                landmark: "error-prevention-legal-financial-data",
                priority: 2
            },
            "3.3.5": {
                name: "Help",
                landmark: "help",
                priority: 3
            },
            "3.3.6": {
                name: "Error Prevention (All)",
                landmark: "error-prevention-all",
                priority: 3
            },
            "4.1.1": {
                name: "Parsing",
                landmark: "parsing",
                priority: 1
            },
            "4.1.2": {
                name: "Name, Role, Value",
                landmark: "name-role-value",
                priority: 1
            },
            "4.1.3": {
                name: "Status Messages",
                landmark: "status-messages",
                priority: 2
            }
        };
        var msgCodeParts = code.split(".", 5);
        var principle = msgCodeParts[1];
        var successCrit = msgCodeParts[3].split("_").slice(0, 3).join(".");
        var techniques = msgCodeParts[4].split(",");
        var techniquesStr = [];
        function getPrefix(x) {
            function startsWith(str, search, rawPos) {
                var pos = rawPos > 0 ? rawPos | 0 : 0;
                return str.substring(pos, pos + search.length) === search;
            }
            if (startsWith(x, "ARIA")) {
                return "aria/";
            }
            if (startsWith(x, "SCR")) {
                return "client-side-script/";
            }
            if (startsWith(x, "C")) {
                return "css/";
            }
            if (startsWith(x, "FLASH")) {
                return "flash/";
            }
            if (startsWith(x, "F")) {
                return "failures/";
            }
            if (startsWith(x, "G")) {
                return "general/";
            }
            if (startsWith(x, "H")) {
                return "html/";
            }
            if (startsWith(x, "PDF")) {
                return "pdf/";
            }
            if (startsWith(x, "SVR")) {
                return "server-side-script/";
            }
            if (startsWith(x, "SL")) {
                return "silverlight/";
            }
            if (startsWith(x, "SM")) {
                return "smil/";
            }
            if (startsWith(x, "T")) {
                return "text/";
            }
            return "";
        }
        for (var i = 0; i < techniques.length; i++) {
            techniques[i] = techniques[i].split(".");
            if (techniques[i][0] !== "") {
                techniquesStr.push('<a href="https://www.w3.org/WAI/WCAG21/Techniques/' + getPrefix(techniques[i][0]) + techniques[i][0] + '" target="_blank">' + techniques[i][0] + "</a>");
            }
        }
        var successCritStr = [ '<a href="http://www.w3.org/TR/WCAG21/#' + successCritList[successCrit].landmark, '" target="_blank">', successCrit, ": ", successCritList[successCrit].name, "</a>" ].join("");
        var principleStr = [ '<a href="', principles[principle].link, '" target="_blank">', principles[principle].name, "</a>" ].join("");
        var retval = [ [ _global.HTMLCS.getTranslation("auditor_success_criterion"), successCritStr ] ];
        if (techniquesStr.length > 0) {
            retval.push([ _global.HTMLCS.getTranslation("auditor_suggested_techniques"), techniquesStr.join(" ") ]);
        }
        return retval;
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_1_1_1_1 = {
    register: function() {
        return [ "_top", "img" ];
    },
    process: function(element, top) {
        if (element === top) {
            this.addNullAltTextResults(top);
            this.addMediaAlternativesResults(top);
        } else {
            var nodeName = element.nodeName.toLowerCase();
            switch (nodeName) {
              case "img":
                this.testLinkStutter(element);
                this.testLongdesc(element);
                break;
            }
        }
    },
    addNullAltTextResults: function(top) {
        var errors = this.testNullAltText(top);
        for (var i = 0; i < errors.img.emptyAltInLink.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.img.emptyAltInLink[i], _global.HTMLCS.getTranslation("1_1_1_H30.2"), "H30.2");
        }
        for (var i = 0; i < errors.img.nullAltWithTitle.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.img.nullAltWithTitle[i], _global.HTMLCS.getTranslation("1_1_1_H67.1"), "H67.1");
        }
        for (var i = 0; i < errors.img.ignored.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, errors.img.ignored[i], _global.HTMLCS.getTranslation("1_1_1_H67.2"), "H67.2");
        }
        for (var i = 0; i < errors.img.missingAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.img.missingAlt[i], _global.HTMLCS.getTranslation("1_1_1_H37"), "H37");
        }
        for (var i = 0; i < errors.img.generalAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.NOTICE, errors.img.generalAlt[i], _global.HTMLCS.getTranslation("1_1_1_G94.Image"), "G94.Image");
        }
        for (var i = 0; i < errors.inputImage.missingAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.inputImage.missingAlt[i], _global.HTMLCS.getTranslation("1_1_1_H36"), "H36");
        }
        for (var i = 0; i < errors.inputImage.generalAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.NOTICE, errors.inputImage.generalAlt[i], _global.HTMLCS.getTranslation("1_1_1_G94.Button"), "G94.Button");
        }
        for (var i = 0; i < errors.area.missingAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.area.missingAlt[i], _global.HTMLCS.getTranslation("1_1_1_H24"), "H24");
        }
        for (var i = 0; i < errors.area.generalAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.NOTICE, errors.area.generalAlt[i], _global.HTMLCS.getTranslation("1_1_1_H24.2"), "H24.2");
        }
    },
    testNullAltText: function(top) {
        var errors = {
            img: {
                generalAlt: [],
                missingAlt: [],
                ignored: [],
                nullAltWithTitle: [],
                emptyAltInLink: []
            },
            inputImage: {
                generalAlt: [],
                missingAlt: []
            },
            area: {
                generalAlt: [],
                missingAlt: []
            }
        };
        elements = HTMLCS.util.getAllElements(top, 'img, area, input[type="image"]');
        for (var el = 0; el < elements.length; el++) {
            var element = elements[el];
            var nodeName = element.nodeName.toLowerCase();
            var linkOnlyChild = false;
            var missingAlt = false;
            var nullAlt = false;
            if (element.parentNode.nodeName.toLowerCase() === "a") {
                var prevNode = HTMLCS.util.getPreviousSiblingElement(element, null);
                var nextNode = HTMLCS.util.getNextSiblingElement(element, null);
                if (prevNode === null && nextNode === null) {
                    var textContent = element.parentNode.textContent;
                    if (element.parentNode.textContent !== undefined) {
                        var textContent = element.parentNode.textContent;
                    } else {
                        var textContent = element.parentNode.innerText;
                    }
                    if (HTMLCS.util.isStringEmpty(textContent) === true) {
                        linkOnlyChild = true;
                    }
                }
            }
            if (element.hasAttribute("alt") === false) {
                missingAlt = true;
            } else if (!element.getAttribute("alt") || HTMLCS.util.isStringEmpty(element.getAttribute("alt")) === true) {
                nullAlt = true;
            }
            switch (nodeName) {
              case "img":
                if (linkOnlyChild === true && (missingAlt === true || nullAlt === true)) {
                    errors.img.emptyAltInLink.push(element.parentNode);
                } else if (missingAlt === true) {
                    errors.img.missingAlt.push(element);
                } else if (nullAlt === true) {
                    if (element.hasAttribute("title") === true && HTMLCS.util.isStringEmpty(element.getAttribute("title")) === false) {
                        errors.img.nullAltWithTitle.push(element);
                    } else {
                        errors.img.ignored.push(element);
                    }
                } else {
                    errors.img.generalAlt.push(element);
                }
                break;

              case "input":
                if (missingAlt === true || nullAlt === true) {
                    errors.inputImage.missingAlt.push(element);
                } else {
                    errors.inputImage.generalAlt.push(element);
                }
                break;

              case "area":
                if (missingAlt === true || nullAlt === true) {
                    errors.area.missingAlt.push(element);
                } else {
                    errors.inputImage.generalAlt.push(element);
                }
                break;

              default:
                break;
            }
        }
        return errors;
    },
    testLongdesc: function(element) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_1_1_G73,G74"), "G73,G74");
    },
    testLinkStutter: function(element) {
        if (element.parentNode.nodeName.toLowerCase() === "a") {
            var anchor = element.parentNode;
            var nodes = {
                anchor: {
                    href: anchor.getAttribute("href"),
                    text: HTMLCS.util.getElementTextContent(anchor, false),
                    alt: this._getLinkAltText(anchor)
                }
            };
            if (nodes.anchor.alt === null) {
                nodes.anchor.alt = "";
            }
            if (nodes.anchor.alt !== null && nodes.anchor.alt !== "") {
                if (HTMLCS.util.trim(nodes.anchor.alt).toLowerCase() === HTMLCS.util.trim(nodes.anchor.text).toLowerCase()) {
                    HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_1_1_H2.EG5"), "H2.EG5");
                }
            }
            if (nodes.anchor.text === "") {
                var prevLink = HTMLCS.util.getPreviousSiblingElement(anchor, "a", true);
                var nextLink = HTMLCS.util.getNextSiblingElement(anchor, "a", true);
                if (prevLink !== null) {
                    nodes.previous = {
                        href: prevLink.getAttribute("href"),
                        text: HTMLCS.util.getElementTextContent(prevLink, false),
                        alt: this._getLinkAltText(prevLink)
                    };
                    if (nodes.previous.alt === null) {
                        nodes.previous.alt = "";
                    }
                }
                if (nextLink !== null) {
                    nodes.next = {
                        href: nextLink.getAttribute("href"),
                        text: HTMLCS.util.getElementTextContent(nextLink, false),
                        alt: this._getLinkAltText(nextLink)
                    };
                    if (nodes.next.alt === null) {
                        nodes.next.alt = "";
                    }
                }
                if (nodes.next && nodes.next.href !== "" && nodes.next.href !== null && nodes.anchor.href === nodes.next.href) {
                    if (nodes.next.text !== "" && nodes.anchor.alt === "") {
                        HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_1_1_H2.EG4"), "H2.EG4");
                    } else if (nodes.next.text.toLowerCase() === nodes.anchor.alt.toLowerCase()) {
                        HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_1_1_H2.EG3"), "H2.EG3");
                    }
                }
                if (nodes.previous && nodes.previous.href !== "" && nodes.previous.href !== null && nodes.anchor.href === nodes.previous.href) {
                    if (nodes.previous.text !== "" && nodes.anchor.alt === "") {
                        HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_1_1_H2.EG4"), "H2.EG4");
                    } else if (nodes.previous.text.toLowerCase() === nodes.anchor.alt.toLowerCase()) {
                        HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_1_1_H2.EG3"), "H2.EG3");
                    }
                }
            }
        }
    },
    addMediaAlternativesResults: function(top) {
        var errors = this.testMediaTextAlternatives(top);
        for (var i = 0; i < errors.object.missingBody.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.object.missingBody[i], _global.HTMLCS.getTranslation("1_1_1_H53,ARIA6"), "H53,ARIA6");
        }
        for (var i = 0; i < errors.object.generalAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.NOTICE, errors.object.generalAlt[i], _global.HTMLCS.getTranslation("1_1_1_G94,G92.Object,ARIA6"), "G94,G92.Object,ARIA6");
        }
        for (var i = 0; i < errors.applet.missingBody.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.applet.missingBody[i], _global.HTMLCS.getTranslation("1_1_1_H35.3"), "H35.3");
        }
        for (var i = 0; i < errors.applet.missingAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.applet.missingAlt[i], _global.HTMLCS.getTranslation("1_1_1_H35.2"), "H35.2");
        }
        for (var i = 0; i < errors.applet.generalAlt.length; i++) {
            HTMLCS.addMessage(HTMLCS.NOTICE, errors.applet.generalAlt[i], _global.HTMLCS.getTranslation("1_1_1_G94,G92.Applet"), "G94,G92.Applet");
        }
    },
    testMediaTextAlternatives: function(top) {
        var errors = {
            object: {
                missingBody: [],
                generalAlt: []
            },
            applet: {
                missingBody: [],
                missingAlt: [],
                generalAlt: []
            }
        };
        var elements = HTMLCS.util.getAllElements(top, "object");
        for (var el = 0; el < elements.length; el++) {
            var element = elements[el];
            var childObject = element.querySelector("object");
            if (childObject === null) {
                if (HTMLCS.util.isStringEmpty(HTMLCS.util.getElementTextContent(element, true)) === true) {
                    if (HTMLCS.util.hasValidAriaLabel(element) === false) {
                        errors.object.missingBody.push(element);
                    }
                } else {
                    if (HTMLCS.util.hasValidAriaLabel(element) === false) {
                        errors.object.generalAlt.push(element);
                    }
                }
            }
        }
        var elements = HTMLCS.util.getAllElements(top, "applet");
        for (var el = 0; el < elements.length; el++) {
            var childObject = element.querySelector("object");
            var hasError = false;
            if (childObject === null) {
                var textAlt = HTMLCS.util.getElementTextContent(element, true);
                if (HTMLCS.util.isStringEmpty(textAlt) === true) {
                    errors.applet.missingBody.push(element);
                    hasError = true;
                }
            }
            var altAttr = element.getAttribute("alt") || "";
            if (HTMLCS.util.isStringEmpty(altAttr) === true) {
                errors.applet.missingAlt.push(element);
                hasError = true;
            }
            if (HTMLCS.util.hasValidAriaLabel(element) === true) {
                hasError = false;
            }
            if (hasError === false) {
                errors.applet.generalAlt.push(element);
            }
        }
        return errors;
    },
    _getLinkAltText: function(anchor) {
        var anchor = anchor.cloneNode(true);
        var nodes = [];
        for (var i = 0; i < anchor.childNodes.length; i++) {
            nodes.push(anchor.childNodes[i]);
        }
        var alt = null;
        while (nodes.length > 0) {
            var node = nodes.shift();
            if (node.nodeType === 1) {
                if (node.nodeName.toLowerCase() === "img") {
                    if (node.hasAttribute("alt") === true) {
                        alt = node.getAttribute("alt");
                        if (!alt) {
                            alt = "";
                        } else {
                            alt = alt.replace(/^\s+|\s+$/g, "");
                        }
                        break;
                    }
                }
            }
        }
        return alt;
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_1 = {
    register: function() {
        return [ "object", "embed", "applet", "bgsound", "audio", "video" ];
    },
    process: function(element, top) {
        var nodeName = element.nodeName.toLowerCase();
        if (nodeName !== "video") {
            HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_2_1_G158"), "G158");
        }
        if (nodeName !== "bgsound" && nodeName !== "audio") {
            HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_2_1_G159,G166"), "G159,G166");
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_2 = {
    register: function() {
        return [ "object", "embed", "applet", "video" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_2_2_G87,G93"), "G87,G93");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_3 = {
    register: function() {
        return [ "object", "embed", "applet", "video" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_2_3_G69,G78,G173,G8"), "G69,G78,G173,G8");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_4 = {
    register: function() {
        return [ "object", "embed", "applet", "video" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_2_4_G9,G87,G93"), "G9,G87,G93");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_5 = {
    register: function() {
        return [ "object", "embed", "applet", "video" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_2_5_G78,G173,G8"), "G78,G173,G8");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_6 = {
    register: function() {
        return [ "object", "embed", "applet", "video" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_2_6_G54,G81"), "G54,G81");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_7 = {
    register: function() {
        return [ "object", "embed", "applet", "video" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_2_7_G8"), "G8");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_8 = {
    register: function() {
        return [ "object", "embed", "applet", "video" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_2_8_G69,G159"), "G69,G159");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_2_1_2_9 = {
    register: function() {
        return [ "object", "embed", "applet", "bgsound", "audio" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_2_9_G150,G151,G157"), "G150,G151,G157");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_A = {
    _labelNames: null,
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        var sniff = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1;
        if (element === top) {
            sniff.testHeadingOrder(top, HTMLCS.WARNING);
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1_AAA = {
    _labelNames: null,
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        var sniff = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1;
        if (element === top) {
            sniff.testHeadingOrder(top, HTMLCS.ERROR);
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1 = {
    _labelNames: null,
    register: function() {
        return [ "_top", "p", "div", "input", "select", "textarea", "button", "table", "fieldset", "form", "h1", "h2", "h3", "h4", "h5", "h6" ];
    },
    process: function(element, top) {
        var nodeName = element.nodeName.toLowerCase();
        if (element === top) {
            this.testPresentationMarkup(top);
            this.testEmptyDupeLabelForAttrs(top);
        } else {
            switch (nodeName) {
              case "input":
              case "textarea":
              case "button":
                this.testLabelsOnInputs(element, top);
                break;

              case "form":
                this.testRequiredFieldsets(element);
                break;

              case "select":
                this.testLabelsOnInputs(element, top);
                this.testOptgroup(element);
                break;

              case "p":
              case "div":
                this.testNonSemanticHeading(element);
                this.testListsWithBreaks(element);
                this.testUnstructuredNavLinks(element);
                break;

              case "table":
                this.testGeneralTable(element);
                this.testTableHeaders(element);
                this.testTableCaptionSummary(element);
                break;

              case "fieldset":
                this.testFieldsetLegend(element);
                break;

              case "h1":
              case "h2":
              case "h3":
              case "h4":
              case "h5":
              case "h6":
                this.testEmptyHeading(element);
                break;
            }
        }
    },
    testSemanticPresentationRole: function(element) {
        var permitted = [ "div", "span", "b", "i" ];
        if (HTMLCS.util.isAriaHidden(element) === false && element.hasAttribute("role") && element.getAttribute("role") === "presentation" && permitted.indexOf(element.nodeName.toLowerCase()) === -1) {
            var children = element.querySelectorAll("*:not(" + permitted.join("):not(") + ")");
            children = [].filter.call(children, function(child) {
                return child.hasAttribute("role") === false;
            });
            if (children.length) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_3_1_F92,ARIA4"), "F92,ARIA4");
            }
        }
    },
    testEmptyDupeLabelForAttrs: function(top) {
        this._labelNames = {};
        var labels = top.getElementsByTagName("label");
        for (var i = 0; i < labels.length; i++) {
            if (labels[i].getAttribute("for") !== null && labels[i].getAttribute("for") !== "") {
                var labelFor = labels[i].getAttribute("for");
                if (this._labelNames[labelFor] && this._labelNames[labelFor] !== null) {
                    this._labelNames[labelFor] = null;
                } else {
                    this._labelNames[labelFor] = labels[i];
                    if (top.ownerDocument) {
                        var refNode = top.ownerDocument.getElementById(labelFor);
                    } else {
                        var refNode = top.getElementById(labelFor);
                    }
                    if (refNode === null) {
                        var level = HTMLCS.ERROR;
                        var msg = _global.HTMLCS.getTranslation("1_3_1_H44.NonExistent");
                        var code = "H44.NonExistent";
                        if (HTMLCS.isFullDoc(top) === true || top.nodeName.toLowerCase() === "body") {
                            level = HTMLCS.WARNING;
                            msg = _global.HTMLCS.getTranslation("1_3_1_H44.NonExistentFragment");
                            var code = "H44.NonExistentFragment";
                        }
                        HTMLCS.addMessage(level, labels[i], msg, code);
                    } else {
                        var nodeName = refNode.nodeName.toLowerCase();
                        if ("input|select|textarea|button|keygen|meter|output|progress".indexOf(nodeName) === -1) {
                            HTMLCS.addMessage(HTMLCS.WARNING, labels[i], _global.HTMLCS.getTranslation("1_3_1_H44.NotFormControl"), "H44.NotFormControl");
                        }
                    }
                }
            }
        }
    },
    testLabelsOnInputs: function(element, top, muteErrors) {
        var nodeName = element.nodeName.toLowerCase();
        var inputType = nodeName;
        if (inputType === "input") {
            if (element.hasAttribute("type") === true) {
                inputType = element.getAttribute("type");
            } else {
                inputType = "text";
            }
        }
        var hasLabel = false;
        var addToLabelList = function(found) {
            if (!hasLabel) hasLabel = {};
            hasLabel[found] = true;
        };
        var needsLabel = false;
        var inputType = inputType.toLowerCase();
        if (inputType === "select" || inputType === "textarea") {
            needsLabel = true;
        } else if (/^(radio|checkbox|text|file|password)$/.test(inputType) === true) {
            needsLabel = true;
        }
        if (element.getAttribute("hidden") !== null) {
            needsLabel = false;
        }
        var explicitLabel = element.ownerDocument.querySelector('label[for="' + element.id + '"]');
        if (explicitLabel) {
            addToLabelList("explicit");
        }
        var foundImplicit = false;
        if (element.parentNode) {
            HTMLCS.util.eachParentNode(element, function(parent) {
                if (parent.nodeName.toLowerCase() === "label") {
                    foundImplicit = true;
                }
            });
        }
        if (foundImplicit === true) {
            addToLabelList("implicit");
        }
        var title = element.getAttribute("title");
        if (title !== null) {
            if (/^\s*$/.test(title) === true && needsLabel === true) {
                HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_3_1_H65"), "H65");
            } else {
                addToLabelList("title");
            }
        }
        if (element.hasAttribute("aria-label") === true) {
            if (HTMLCS.util.hasValidAriaLabel(element) === false) {
                HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_3_1_ARIA6"), "ARIA6");
            } else {
                addToLabelList("aria-label");
            }
        }
        if (element.hasAttribute("aria-labelledby") === true) {
            if (HTMLCS.util.hasValidAriaLabel(element) === false) {
                HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_3_1_ARIA16,ARIA9").replace(/\{\{id\}\}/g, element.getAttribute("aria-labelledby")), "ARIA16,ARIA9");
            } else {
                addToLabelList("aria-labelledby");
            }
        }
        if (!(muteErrors === true)) {
            if (hasLabel !== false && needsLabel === false) {
                if (inputType === "hidden") {
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_3_1_F68.Hidden"), "F68.Hidden");
                } else if (element.getAttribute("hidden") !== null) {
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_3_1_F68.HiddenAttr"), "F68.HiddenAttr");
                }
            } else if (hasLabel === false && needsLabel === true) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_3_1_F68"), "F68");
            }
        }
        return hasLabel;
    },
    testPresentationMarkup: function(top) {
        var _doc = HTMLCS.util.getElementWindow(top).document;
        var doctype = HTMLCS.util.getDocumentType(_doc);
        if (doctype && (doctype === "html5" || doctype === "xhtml5")) {
            var tags = HTMLCS.util.getAllElements(top, "strike, tt, big, center, font");
            for (var i = 0; i < tags.length; i++) {
                var msgCode = "H49." + tags[i].nodeName.substr(0, 1).toUpperCase() + tags[i].nodeName.substr(1).toLowerCase();
                HTMLCS.addMessage(HTMLCS.ERROR, tags[i], _global.HTMLCS.getTranslation("1_3_1_H49."), msgCode);
            }
            var tags = HTMLCS.util.getAllElements(top, "*[align]");
            for (var i = 0; i < tags.length; i++) {
                var msgCode = "H49.AlignAttr";
                HTMLCS.addMessage(HTMLCS.ERROR, tags[i], "Align attributes .", msgCode);
            }
        } else {
            var tags = HTMLCS.util.getAllElements(top, "b, i, u, s, strike, tt, big, small, center, font");
            for (var i = 0; i < tags.length; i++) {
                var msgCode = "H49." + tags[i].nodeName.substr(0, 1).toUpperCase() + tags[i].nodeName.substr(1).toLowerCase();
                HTMLCS.addMessage(HTMLCS.WARNING, tags[i], _global.HTMLCS.getTranslation("1_3_1_H49.Semantic"), msgCode);
            }
            var tags = HTMLCS.util.getAllElements(top, "*[align]");
            for (var i = 0; i < tags.length; i++) {
                var msgCode = "H49.AlignAttr";
                HTMLCS.addMessage(HTMLCS.WARNING, tags[i], _global.HTMLCS.getTranslation("1_3_1_H49.AlignAttr.Semantic"), msgCode);
            }
        }
    },
    testNonSemanticHeading: function(element) {
        var tag = element.nodeName.toLowerCase();
        if (tag === "p" || tag === "div") {
            var children = element.childNodes;
            if (children.length === 1 && children[0].nodeType === 1) {
                var childTag = children[0].nodeName.toLowerCase();
                if (/^(strong|em|b|i|u)$/.test(childTag) === true) {
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_3_1_H42"), "H42");
                }
            }
        }
    },
    testTableHeaders: function(table) {
        var headersAttr = HTMLCS.util.testTableHeaders(table);
        var scopeAttr = this._testTableScopeAttrs(table);
        for (var i = 0; i < scopeAttr.invalid.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, scopeAttr.invalid[i], _global.HTMLCS.getTranslation("1_3_1_H63.3"), "H63.3");
        }
        for (var i = 0; i < scopeAttr.obsoleteTd.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, scopeAttr.obsoleteTd[i], _global.HTMLCS.getTranslation("1_3_1_H63.2"), "H63.2");
        }
        if (headersAttr.allowScope === true) {
            if (scopeAttr.missing.length === 0) {
                headersAttr.required === false;
            }
        } else {
            if (scopeAttr.used === true) {
                HTMLCS.addMessage(HTMLCS.WARNING, table, _global.HTMLCS.getTranslation("1_3_1_H43.ScopeAmbiguous"), "H43.ScopeAmbiguous");
                scopeAttr = null;
            }
        }
        if (headersAttr.isMultiLevelHeadersTable) {
            HTMLCS.addMessage(HTMLCS.NOTICE, table, _global.HTMLCS.getTranslation("1_3_1_H43.IncorrectAttrNotice"), "H43.IncorrectAttr");
        } else {
            for (var i = 0; i < headersAttr.wrongHeaders.length; i++) {
                HTMLCS.addMessage(HTMLCS.ERROR, headersAttr.wrongHeaders[i].element, _global.HTMLCS.getTranslation("1_3_1_H43.IncorrectAttr").replace(/\{\{expected\}\}/g, headersAttr.wrongHeaders[i].expected).replace(/\{\{actual\}\}/g, headersAttr.wrongHeaders[i].actual), "H43.IncorrectAttr");
            }
        }
        if (headersAttr.required === true && headersAttr.allowScope === false) {
            if (headersAttr.used === false) {
                HTMLCS.addMessage(HTMLCS.ERROR, table, _global.HTMLCS.getTranslation("1_3_1_H43.HeadersRequired"), "H43.HeadersRequired");
            } else {
                if (headersAttr.missingThId.length > 0) {
                    HTMLCS.addMessage(HTMLCS.ERROR, table, _global.HTMLCS.getTranslation("1_3_1_H43.MissingHeaderIds"), "H43.MissingHeaderIds");
                }
                if (headersAttr.missingTd.length > 0) {
                    HTMLCS.addMessage(HTMLCS.ERROR, table, _global.HTMLCS.getTranslation("1_3_1_H43.MissingHeadersAttrs"), "H43.MissingHeadersAttrs");
                }
            }
        }
        if (headersAttr.required === true && headersAttr.allowScope === true && headersAttr.correct === false && scopeAttr.correct === false) {
            if (scopeAttr.used === false && headersAttr.used === false) {
                HTMLCS.addMessage(HTMLCS.ERROR, table, _global.HTMLCS.getTranslation("1_3_1_H43,H63"), "H43,H63");
            } else if (scopeAttr.used === false && (headersAttr.missingThId.length > 0 || headersAttr.missingTd.length > 0)) {
                if (headersAttr.missingThId.length > 0) {
                    HTMLCS.addMessage(HTMLCS.ERROR, table, _global.HTMLCS.getTranslation("1_3_1_H43.MissingHeaderIds"), "H43.MissingHeaderIds");
                }
                if (headersAttr.missingTd.length > 0) {
                    HTMLCS.addMessage(HTMLCS.ERROR, table, _global.HTMLCS.getTranslation("1_3_1_H43.MissingHeadersAttrs"), "H43.MissingHeadersAttrs");
                }
            } else if (scopeAttr.missing.length > 0 && headersAttr.used === false) {
                HTMLCS.addMessage(HTMLCS.ERROR, table, _global.HTMLCS.getTranslation("1_3_1_H63.1"), "H63.1");
            } else if (scopeAttr.missing.length > 0 && (headersAttr.missingThId.length > 0 || headersAttr.missingTd.length > 0)) {
                HTMLCS.addMessage(HTMLCS.ERROR, table, _global.HTMLCS.getTranslation("1_3_1_H43,H63"), "H43,H63");
            }
        }
    },
    _testTableScopeAttrs: function(table) {
        var elements = {
            th: table.getElementsByTagName("th"),
            td: table.getElementsByTagName("td")
        };
        var retval = {
            used: false,
            correct: true,
            missing: [],
            invalid: [],
            obsoleteTd: []
        };
        for (var tagType in elements) {
            for (var i = 0; i < elements[tagType].length; i++) {
                var element = elements[tagType][i];
                var scope = "";
                if (element.hasAttribute("scope") === true) {
                    retval.used = true;
                    if (element.getAttribute("scope")) {
                        scope = element.getAttribute("scope");
                    }
                }
                if (element.nodeName.toLowerCase() === "th") {
                    if (/^\s*$/.test(scope) === true) {
                        retval.correct = false;
                        retval.missing.push(element);
                    } else if (/^(row|col|rowgroup|colgroup)$/.test(scope) === false) {
                        retval.correct = false;
                        retval.invalid.push(element);
                    }
                } else {
                    if (scope !== "") {
                        retval.obsoleteTd.push(element);
                        if (/^(row|col|rowgroup|colgroup)$/.test(scope) === false) {
                            retval.correct = false;
                            retval.invalid.push(element);
                        }
                    }
                }
            }
        }
        return retval;
    },
    testTableCaptionSummary: function(table) {
        var summary = table.getAttribute("summary") || "";
        var captionEl = table.getElementsByTagName("caption");
        var caption = "";
        if (captionEl.length > 0) {
            caption = captionEl[0].innerHTML.replace(/^\s*(.*?)\s*$/g, "$1");
        }
        var doctype = HTMLCS.util.getDocumentType(table.ownerDocument);
        if (doctype && doctype.indexOf("html5") === -1) {
            summary = summary.replace(/^\s*(.*?)\s*$/g, "$1");
            if (summary !== "") {
                if (HTMLCS.util.isLayoutTable(table) === true) {
                    HTMLCS.addMessage(HTMLCS.ERROR, table, _global.HTMLCS.getTranslation("1_3_1_H73.3.LayoutTable"), "H73.3.LayoutTable");
                } else {
                    if (caption === summary) {
                        HTMLCS.addMessage(HTMLCS.ERROR, table, _global.HTMLCS.getTranslation("1_3_1_H39,H73.4"), "H39,H73.4");
                    }
                    HTMLCS.addMessage(HTMLCS.NOTICE, table, _global.HTMLCS.getTranslation("1_3_1_H73.3.Check"), "H73.3.Check");
                }
            } else {
                if (HTMLCS.util.isLayoutTable(table) === false) {
                    HTMLCS.addMessage(HTMLCS.WARNING, table, _global.HTMLCS.getTranslation("1_3_1_H73.3.NoSummary"), "H73.3.NoSummary");
                }
            }
        }
        if (caption !== "") {
            if (HTMLCS.util.isLayoutTable(table) === true) {
                HTMLCS.addMessage(HTMLCS.ERROR, table, _global.HTMLCS.getTranslation("1_3_1_H39.3.LayoutTable"), "H39.3.LayoutTable");
            } else {
                HTMLCS.addMessage(HTMLCS.NOTICE, table, _global.HTMLCS.getTranslation("1_3_1_H39.3.Check"), "H39.3.Check");
            }
        } else {
            if (HTMLCS.util.isLayoutTable(table) === false) {
                HTMLCS.addMessage(HTMLCS.WARNING, table, _global.HTMLCS.getTranslation("1_3_1_H39.3.NoCaption"), "H39.3.NoCaption");
            }
        }
    },
    testFieldsetLegend: function(fieldset) {
        var legend = fieldset.querySelector("legend");
        if (legend === null || legend.parentNode !== fieldset) {
            HTMLCS.addMessage(HTMLCS.ERROR, fieldset, _global.HTMLCS.getTranslation("1_3_1_H71.NoLegend"), "H71.NoLegend");
        }
    },
    testOptgroup: function(select) {
        var optgroup = select.querySelector("optgroup");
        if (optgroup === null) {
            HTMLCS.addMessage(HTMLCS.WARNING, select, _global.HTMLCS.getTranslation("1_3_1_H85.2"), "H85.2");
        }
    },
    testRequiredFieldsets: function(form) {
        var optionInputs = form.querySelectorAll("input[type=radio], input[type=checkbox]");
        var usedNames = {};
        for (var i = 0; i < optionInputs.length; i++) {
            var option = optionInputs[i];
            if (option.hasAttribute("name") === true) {
                var optionName = option.getAttribute("name");
                var fieldset = option.parentNode;
                while (fieldset.nodeName.toLowerCase() !== "fieldset" && fieldset !== null && fieldset !== form) {
                    fieldset = fieldset.parentNode;
                }
                if (fieldset.nodeName.toLowerCase() !== "fieldset") {
                    fieldset = null;
                }
            }
            if (usedNames[optionName] === undefined) {
                usedNames[optionName] = fieldset;
            } else if (fieldset === null || fieldset !== usedNames[optionName]) {
                HTMLCS.addMessage(HTMLCS.WARNING, form, _global.HTMLCS.getTranslation("1_3_1_H71.SameName"), "H71.SameName");
                break;
            }
        }
    },
    testListsWithBreaks: function(element) {
        var firstBreak = element.querySelector("br");
        var items = [];
        if (firstBreak !== null) {
            var nodes = [];
            for (var i = 0; i < element.childNodes.length; i++) {
                nodes.push(element.childNodes[i]);
            }
            var thisItem = [];
            while (nodes.length > 0) {
                var subel = nodes.shift();
                if (subel.nodeType === 1) {
                    if (subel.nodeName.toLowerCase() === "br") {
                        items.push(thisItem.join(" ").replace(/^\s*(.*?)\s*$/g, "$1"));
                        thisItem = [];
                    } else {
                        for (var i = subel.childNodes.length - 1; i >= 0; --i) {
                            nodes.unshift(subel.childNodes[i]);
                        }
                    }
                } else if (subel.nodeType === 3) {
                    thisItem.push(subel.nodeValue);
                }
            }
            if (thisItem.length > 0) {
                items.push(thisItem.join(" ").replace(/^\s*(.*?)\s*$/g, "$1"));
            }
            for (var i = 0; i < items.length; i++) {
                if (/^[-*]\s+/.test(items[0]) === true) {
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_3_1_H48.1"), "H48.1");
                    break;
                }
                if (/^\d+[:/\-.]?\s+/.test(items[0]) === true) {
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_3_1_H48.2"), "H48.2");
                    break;
                }
            }
        }
    },
    testHeadingOrder: function(top, level) {
        var lastHeading = 0;
        var headings = HTMLCS.util.getAllElements(top, "h1, h2, h3, h4, h5, h6");
        for (var i = 0; i < headings.length; i++) {
            var headingNum = parseInt(headings[i].nodeName.substr(1, 1));
            if (headingNum - lastHeading > 1) {
                if (lastHeading === 0) {
                    HTMLCS.addMessage(level, headings[i], _global.HTMLCS.getTranslation("1_3_1_G141_a").replace(/\{\{headingNum\}\}/g, headingNum), "G141");
                }
                HTMLCS.addMessage(level, headings[i], _global.HTMLCS.getTranslation("1_3_1_G141_b").replace(/\{\{headingNum\}\}/g, headingNum).replace(/\{\{properHeadingNum\}\}/g, lastHeading + 1), "G141");
            }
            lastHeading = headingNum;
        }
    },
    testEmptyHeading: function(element) {
        var text = HTMLCS.util.getElementTextContent(element, true);
        if (/^\s*$/.test(text) === true) {
            HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_3_1_H42.2"), "H42.2");
        }
    },
    testUnstructuredNavLinks: function(element) {
        var linksLength = 0;
        var childNodes = element.childNodes;
        for (var i = 0; i < childNodes.length; i++) {
            if (childNodes[i].nodeType === 1 && childNodes[i].nodeName.toLowerCase() === "a") {
                linksLength++;
                if (linksLength > 1) {
                    break;
                }
            }
        }
        if (linksLength > 1) {
            var parent = element.parentNode;
            while (parent !== null && parent.nodeName.toLowerCase() !== "ul" && parent.nodeName.toLowerCase() !== "ol") {
                parent = parent.parentNode;
            }
            if (parent === null) {
                HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_3_1_H48"), "H48");
            }
        }
    },
    testGeneralTable: function(table) {
        if (HTMLCS.util.isLayoutTable(table) === true) {
            HTMLCS.addMessage(HTMLCS.NOTICE, table, _global.HTMLCS.getTranslation("1_3_1_LayoutTable"), "LayoutTable");
        } else {
            HTMLCS.addMessage(HTMLCS.NOTICE, table, _global.HTMLCS.getTranslation("1_3_1_DataTable"), "DataTable");
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_2 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_3_2_G57"), "G57");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_3 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_3_3_G96"), "G96");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_4 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_3_4.RestrictView"), "");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_5 = {
    register: function() {
        return [ "_top", "input", "select", "textarea" ];
    },
    checkValidAttributes: function(element) {
        var valid_attributes = [ "additional-name", "address-level1", "address-level2", "address-level3", "address-level4", "address-line1", "address-line2", "address-line3", "bday", "bday-year", "bday-day", "bday-month", "billing", "cc-additional-name", "cc-csc", "cc-exp", "cc-exp-month", "cc-exp-year", "cc-family-name", "cc-given-name", "cc-name", "cc-number", "cc-type", "country", "country-name", "current-password", "email", "family-name", "fax", "given-name", "home", "honorific-prefix", "honorific-suffix", "impp", "language", "mobile", "name", "new-password", "nickname", "off", "on", "organization", "organization-title", "pager", "photo", "postal-code", "sex", "shipping", "street-address", "tel-area-code", "tel", "tel-country-code", "tel-extension", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-national", "transaction-amount", "transaction-currency", "url", "username", "work" ];
        var valuesStr = element.getAttribute("autocomplete");
        if (typeof valuesStr !== "string") {
            return;
        }
        var values = valuesStr.split(" ");
        var hasFaultyValue = false;
        for (var i = 0; i < values.length; i++) {
            values[i] = values[i].trim();
            var x = values[i];
            if (valid_attributes.indexOf(x) === -1 && x.indexOf("section-") !== 0) {
                hasFaultyValue = true;
            }
        }
        if (hasFaultyValue === true) {
            HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_3_5_H98.FaultyValue").replace(/\{\{valuesStr\}\}/g, valuesStr), "H98");
        }
    },
    checkControlGroups: function(element) {
        var textFields = [ "name", "honorific-prefix", "given-name", "additional-name", "family-name", "honorific-suffix", "nickname", "organization-title", "username", "organization", "address-line1", "address-line2", "address-line3", "address-level4", "address-level3", "address-level2", "address-level1", "country", "country-name", "postal-code", "cc-name", "cc-given-name", "cc-additional-name", "cc-family-name", "cc-number", "cc-csc", "cc-type", "transaction-currency", "language", "sex", "tel-country-code", "tel-national", "tel-area-code", "tel-local", "tel-local-prefix", "tel-local-suffix", "tel-extension" ];
        var isText = element.tagName === "INPUT" && element.getAttribute("type") === "hidden" || element.tagName === "INPUT" && element.getAttribute("type") === "text" || element.tagName === "INPUT" && element.getAttribute("type") === "search" || element.tagName === "TEXTAREA" || element.tagName === "SELECT";
        var multilineFields = [ "street-address" ];
        var isMultiline = element.tagName === "INPUT" && element.getAttribute("type") === "hidden" || element.tagName === "TEXTAREA" || element.tagName === "SELECT";
        var passwordFields = [ "new-password", "current-password" ];
        var isPassword = element.tagName === "INPUT" && element.getAttribute("type") === "hidden" || element.tagName === "INPUT" && element.getAttribute("type") === "text" || element.tagName === "INPUT" && element.getAttribute("type") === "search" || element.tagName === "INPUT" && element.getAttribute("type") === "password" || element.tagName === "TEXTAREA" || element.tagName === "SELECT";
        var urlFields = [ "url", "photo", "impp" ];
        var isUrl = element.tagName === "INPUT" && element.getAttribute("type") === "hidden" || element.tagName === "INPUT" && element.getAttribute("type") === "text" || element.tagName === "INPUT" && element.getAttribute("type") === "search" || element.tagName === "INPUT" && element.getAttribute("type") === "email" || element.tagName === "TEXTAREA" || element.tagName === "SELECT";
        var telFields = [ "tel" ];
        var isTel = element.tagName === "INPUT" && element.getAttribute("type") === "hidden" || element.tagName === "INPUT" && element.getAttribute("type") === "text" || element.tagName === "INPUT" && element.getAttribute("type") === "search" || element.tagName === "INPUT" && element.getAttribute("type") === "tel" || element.tagName === "TEXTAREA" || element.tagName === "SELECT";
        var numericFields = [ "cc-exp-month", "cc-exp-year", "transaction-amount", "bday-day", "bday-month", "bday-year" ];
        var isNumeric = element.tagName === "INPUT" && element.getAttribute("type") === "hidden" || element.tagName === "INPUT" && element.getAttribute("type") === "text" || element.tagName === "INPUT" && element.getAttribute("type") === "search" || element.tagName === "INPUT" && element.getAttribute("type") === "number" || element.tagName === "TEXTAREA" || element.tagName === "SELECT";
        var monthFields = [ "cc-exp" ];
        var isMonth = element.tagName === "INPUT" && element.getAttribute("type") === "hidden" || element.tagName === "INPUT" && element.getAttribute("type") === "text" || element.tagName === "INPUT" && element.getAttribute("type") === "search" || element.tagName === "INPUT" && element.getAttribute("type") === "month" || element.tagName === "TEXTAREA" || element.tagName === "SELECT";
        var dateFields = [ "bday" ];
        var isDate = element.tagName === "INPUT" && element.getAttribute("type") === "hidden" || element.tagName === "INPUT" && element.getAttribute("type") === "text" || element.tagName === "INPUT" && element.getAttribute("type") === "search" || element.tagName === "INPUT" && element.getAttribute("type") === "date" || element.tagName === "TEXTAREA" || element.tagName === "SELECT";
        var values = element.getAttribute("autocomplete").split(" ");
        for (var i = 0; i < values.length; i++) {
            values[i] = values[i].trim();
            var x = values[i];
            if (textFields.indexOf(x) > -1 && !isText) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_3_5_H98.InvalidAutoComplete_Text").replace(/\{\{x\}\}/g, x), "H98");
            }
            if (multilineFields.indexOf(x) > -1 && !isMultiline) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_3_5_H98.InvalidAutoComplete_Multiline").replace(/\{\{x\}\}/g, x), "H98");
            }
            if (passwordFields.indexOf(x) > -1 && !isPassword) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_3_5_H98.InvalidAutoComplete_Password").replace(/\{\{x\}\}/g, x), "H98");
            }
            if (urlFields.indexOf(x) > -1 && !isUrl) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_3_5_H98.InvalidAutoComplete_Url").replace(/\{\{x\}\}/g, x), "H98");
            }
            if (telFields.indexOf(x) > -1 && !isTel) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_3_5_H98.InvalidAutoComplete_Telephone").replace(/\{\{x\}\}/g, x), "H98");
            }
            if (numericFields.indexOf(x) > -1 && !isNumeric) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_3_5_H98.InvalidAutoComplete_Numeric").replace(/\{\{x\}\}/g, x), "H98");
            }
            if (monthFields.indexOf(x) > -1 && !isMonth) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_3_5_H98.InvalidAutoComplete_Month").replace(/\{\{x\}\}/g, x), "H98");
            }
            if (dateFields.indexOf(x) > -1 && !isDate) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_3_5_H98.InvalidAutoComplete_Date").replace(/\{\{x\}\}/g, x), "H98");
            }
        }
    },
    process: function(element, top) {
        if (element === top) {
            var els = HTMLCS.util.getAllElements(element, "*[autocomplete]");
            for (var i = 0; i < els.length; i++) {
                var x = els[i];
                this.checkValidAttributes(x);
                this.checkControlGroups(x);
            }
        } else {
            HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_3_5_H98.Purpose"), "H98");
            var types_to_skip = [ "hidden", "checkbox", "radio", "file", "submit", "image", "reset", "button" ];
            if (types_to_skip.indexOf(element.getAttribute("type")) > -1) {
                return;
            }
            if (element.hasAttribute("autocomplete") === false) {
                HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_3_5_H98.MissingAutocomplete"), "H98");
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_6 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_3_6_ARIA11.Check"), "ARIA11");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_1 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_1_G14,G18"), "G14,G182");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_10 = {
    register: function() {
        return [ "_top", "pre", "meta" ];
    },
    process: function(element, top) {
        if (element === top) {
            HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_10_C32,C31,C33,C38,SCR34,G206.Check"), "C32,C31,C33,C38,SCR34,G206");
            var all = HTMLCS.util.getAllElements(top, "*");
            for (var i = 0; i < all.length; i++) {
                var x = all[i];
                if (window.getComputedStyle(x, null).getPropertyValue("position") == "fixed") {
                    HTMLCS.addMessage(HTMLCS.WARNING, x, _global.HTMLCS.getTranslation("1_4_10_C32,C31,C33,C38,SCR34,G206.Fixed"), "C32,C31,C33,C38,SCR34,G206");
                }
            }
        } else {
            var nodeName = element.nodeName.toLowerCase();
            switch (nodeName) {
              case "pre":
                HTMLCS.addMessage(HTMLCS.WARNING, top, _global.HTMLCS.getTranslation("1_4_10_C32,C31,C33,C38,SCR34,G206.Scrolling"), "C32,C31,C33,C38,SCR34,G206");
                break;

              case "meta":
                var content = element.getAttribute("content");
                var name = element.getAttribute("name");
                if (name === "viewport" && !!content && (content.indexOf("maximum-scale") > -1 || content.indexOf("minimum-scale") > -1 || content.indexOf("user-scalable=no") > -1 || content.indexOf("user-scalable=0") > -1)) {
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_4_10_C32,C31,C33,C38,SCR34,G206.Zoom"), "C32,C31,C33,C38,SCR34,G206");
                }
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_11 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_11_G195,G207,G18,G145,G174,F78.Check"), "G195,G207,G18,G145,G174,F78");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_12 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_12_C36,C35.Check"), "C36,C35");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_13 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_13_F95.Check"), "F95");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_2 = {
    register: function() {
        return [ "object", "embed", "applet", "bgsound", "audio", "video" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_2_F23"), "F23");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast = {
    testContrastRatio: function(top, minContrast, minLargeContrast) {
        var failures = [];
        if (!top.ownerDocument) {
            var toProcess = [];
            var body = top.getElementsByTagName("body");
            if (body.length) {
                var toProcess = [ body[0] ];
            }
        } else {
            var toProcess = [ top ];
        }
        while (toProcess.length > 0) {
            var node = toProcess.shift();
            if (node && node.nodeType === 1 && HTMLCS.util.isVisuallyHidden(node) === false && HTMLCS.util.isDisabled(node) === false) {
                var processNode = false;
                for (var i = 0; i < node.childNodes.length; i++) {
                    if (node.childNodes[i].nodeType === 1) {
                        toProcess.push(node.childNodes[i]);
                    } else if (node.childNodes[i].nodeType === 3) {
                        if (HTMLCS.util.trim(node.childNodes[i].nodeValue) !== "") {
                            processNode = true;
                        }
                    }
                }
                if (processNode === true) {
                    var style = HTMLCS.util.style(node);
                    if (style) {
                        var bgColour = style.backgroundColor;
                        var foreColour = style.color;
                        var hasBgImg = false;
                        var isAbsolute = false;
                        if (style.backgroundImage !== "none") {
                            hasBgImg = true;
                        }
                        if (style.position == "absolute") {
                            isAbsolute = true;
                        }
                        var parent = node.parentNode;
                        var fontSize = parseFloat(style.fontSize, 10) * (72 / 96);
                        var minLargeSize = 18;
                        if (style.fontWeight === "bold" || parseInt(style.fontWeight, 10) >= 600) {
                            var minLargeSize = 14;
                        }
                        var reqRatio = minContrast;
                        if (fontSize >= minLargeSize) {
                            reqRatio = minLargeContrast;
                        }
                        while (bgColour === "transparent" || bgColour === "rgba(0, 0, 0, 0)") {
                            if (!parent || !parent.ownerDocument) {
                                break;
                            }
                            var parentStyle = HTMLCS.util.style(parent);
                            var bgColour = parentStyle.backgroundColor;
                            if (parentStyle.backgroundImage !== "none") {
                                hasBgImg = true;
                            }
                            if (parentStyle.position == "absolute") {
                                isAbsolute = true;
                            }
                            var beforeStyle = HTMLCS.util.style(parent, ":before");
                            if (beforeStyle && beforeStyle.position == "fixed" && beforeStyle.willChange == "transform" && beforeStyle.width == parentStyle.width && parseInt(beforeStyle.height, 10) <= parseInt(parentStyle.height, 10) && beforeStyle.backgroundImage !== "none") {
                                hasBgImg = true;
                                break;
                            }
                            parent = parent.parentNode;
                        }
                        var bgAlpha = HTMLCS.util.colourStrToRGB(bgColour).alpha;
                        var fgAlpha = HTMLCS.util.colourStrToRGB(foreColour).alpha;
                        if (bgColour && bgAlpha < 1 && bgAlpha > 0) {
                            failures.push({
                                element: node,
                                colour: foreColour,
                                bgColour: bgColour,
                                value: undefined,
                                required: reqRatio,
                                hasAlpha: true
                            });
                            continue;
                        } else if (foreColour && fgAlpha < 1 && fgAlpha > 0) {
                            failures.push({
                                element: node,
                                colour: foreColour,
                                bgColour: foreColour,
                                value: undefined,
                                required: reqRatio,
                                hasAlpha: true
                            });
                            continue;
                        } else if (hasBgImg === true) {
                            failures.push({
                                element: node,
                                colour: foreColour,
                                bgColour: undefined,
                                value: undefined,
                                required: reqRatio,
                                hasBgImage: true
                            });
                            continue;
                        } else if (isAbsolute === true) {
                            failures.push({
                                element: node,
                                colour: foreColour,
                                bgColour: undefined,
                                value: undefined,
                                required: reqRatio,
                                isAbsolute: true
                            });
                            continue;
                        } else if (bgColour === "transparent" || bgColour === "rgba(0, 0, 0, 0)") {
                            continue;
                        }
                        var contrastRatio = HTMLCS.util.contrastRatio(bgColour, foreColour);
                        if (contrastRatio < reqRatio) {
                            var recommendation = this.recommendColour(bgColour, foreColour, reqRatio);
                            failures.push({
                                element: node,
                                colour: style.color,
                                bgColour: bgColour,
                                value: contrastRatio,
                                required: reqRatio,
                                recommendation: recommendation
                            });
                        }
                    }
                }
            }
        }
        return failures;
    },
    recommendColour: function(back, fore, target) {
        var fore = HTMLCS.util.RGBtoColourStr(HTMLCS.util.colourStrToRGB(fore));
        var back = HTMLCS.util.RGBtoColourStr(HTMLCS.util.colourStrToRGB(back));
        var cr = HTMLCS.util.contrastRatio(fore, back);
        var foreDiff = Math.abs(HTMLCS.util.relativeLum(fore) - .5);
        var backDiff = Math.abs(HTMLCS.util.relativeLum(back) - .5);
        var recommendation = null;
        if (cr < target) {
            var multiplier = 1 + 1 / 400;
            if (foreDiff <= backDiff) {
                var change = "back";
                var newCol = back;
                if (HTMLCS.util.relativeLum(back) < .5) {
                    var multiplier = 1 / multiplier;
                }
            } else {
                var change = "fore";
                var newCol = fore;
                if (HTMLCS.util.relativeLum(fore) < .5) {
                    var multiplier = 1 / multiplier;
                }
            }
            var hsv = HTMLCS.util.sRGBtoHSV(newCol);
            var newFore = fore;
            var newBack = back;
            var changed = false;
            var i = 0;
            while (cr < target) {
                if (newCol === "#fff" || newCol === "#000") {
                    if (changed === true) {
                        if (change === "fore") {
                            var oldBack = newBack;
                            var j = 1;
                            while (newBack === oldBack) {
                                var newBack = this.multiplyColour(newBack, Math.pow(1 / multiplier, j));
                                j++;
                            }
                        } else {
                            var oldFore = newFore;
                            var j = 1;
                            while (newFore === oldFore) {
                                var newFore = this.multiplyColour(newFore, Math.pow(1 / multiplier, j));
                                j++;
                            }
                        }
                    } else {
                        newFore = fore;
                        newBack = back;
                        multiplier = 1 / multiplier;
                        if (change === "fore") {
                            change = "back";
                            var hsv = back;
                        } else {
                            change = "fore";
                            var hsv = fore;
                        }
                        hsv = HTMLCS.util.sRGBtoHSV(hsv);
                        changed = true;
                    }
                }
                i++;
                var newCol = HTMLCS.util.HSVtosRGB(hsv);
                var newCol = this.multiplyColour(newCol, Math.pow(multiplier, i));
                if (change === "fore") {
                    var newFore = newCol;
                } else {
                    var newBack = newCol;
                }
                var cr = HTMLCS.util.contrastRatio(newFore, newBack);
            }
            recommendation = {
                fore: {
                    from: fore,
                    to: newFore
                },
                back: {
                    from: back,
                    to: newBack
                }
            };
        }
        return recommendation;
    },
    multiplyColour: function(colour, multiplier) {
        var hsvColour = HTMLCS.util.sRGBtoHSV(colour);
        var chroma = hsvColour.saturation * hsvColour.value;
        if (hsvColour.value === 0) {
            hsvColour.value = 1 / 255;
        }
        hsvColour.value = hsvColour.value * multiplier;
        if (hsvColour.value === 0) {
            hsvColour.saturation = 0;
        } else {
            hsvColour.saturation = chroma / hsvColour.value;
        }
        hsvColour.value = Math.min(1, hsvColour.value);
        hsvColour.saturation = Math.min(1, hsvColour.saturation);
        var newColour = HTMLCS.util.RGBtoColourStr(HTMLCS.util.HSVtosRGB(hsvColour));
        return newColour;
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_F24 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        var elements = HTMLCS.util.getAllElements(top, "*");
        for (var i = 0; i < elements.length; i++) {
            this.testColourComboFail(elements[i]);
        }
    },
    testColourComboFail: function(element) {
        var hasFg = element.hasAttribute("color");
        hasFg = hasFg || element.hasAttribute("link");
        hasFg = hasFg || element.hasAttribute("vlink");
        hasFg = hasFg || element.hasAttribute("alink");
        var hasBg = element.hasAttribute("bgcolor");
        if (element.style) {
            var fgStyle = element.style.color;
            var bgStyle = element.style.background;
            if (fgStyle !== "" && fgStyle !== "auto") {
                hasFg = true;
            }
            if (bgStyle !== "" && bgStyle !== "auto") {
                hasBg = true;
            }
        }
        if (hasBg !== hasFg) {
            if (hasBg === true) {
                HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_4_3_F24.BGColour"), "F24.BGColour");
            } else {
                HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_4_3_F24.FGColour"), "F24.FGColour");
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        if (element === top) {
            var failures = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(top, 4.5, 3);
            for (var i = 0; i < failures.length; i++) {
                var element = failures[i].element;
                var decimals = 2;
                var value = Math.round(failures[i].value * Math.pow(10, decimals)) / Math.pow(10, decimals);
                var required = failures[i].required;
                var recommend = failures[i].recommendation;
                var hasBgImg = failures[i].hasBgImage || false;
                var isAbsolute = failures[i].isAbsolute || false;
                var hasAlpha = failures[i].hasAlpha || false;
                while (required === value) {
                    decimals++;
                    value = Math.round(failures[i].value * Math.pow(10, decimals)) / Math.pow(10, decimals);
                }
                if (required === 4.5) {
                    var code = "G18";
                } else if (required === 3) {
                    var code = "G145";
                }
                var recommendText = [];
                if (recommend) {
                    if (recommend.fore.from !== recommend.fore.to) {
                        recommendText.push(_global.HTMLCS.getTranslation("1_4_3_G18_or_G145.Fail.Recomendation.Text").replace(/\{\{value\}\}/g, recommend.fore.to));
                    }
                    if (recommend.back.from !== recommend.back.to) {
                        recommendText.push(_global.HTMLCS.getTranslation("1_4_3_G18_or_G145.Fail.Recomendation.Background").replace(/\{\{value\}\}/g, recommend.back.to));
                    }
                }
                if (recommendText.length > 0) {
                    recommendText = " " + _global.HTMLCS.getTranslation("1_4_3_G18_or_G145.Fail.Recomendation") + " " + recommendText.join(", ") + ".";
                }
                if (isAbsolute === true) {
                    code += ".Abs";
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_4_3_G18_or_G145.Abs").replace(/\{\{required\}\}/g, required), code);
                } else if (hasBgImg === true) {
                    code += ".BgImage";
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_4_3_G18_or_G145.BgImage").replace(/\{\{required\}\}/g, required), code);
                } else if (hasAlpha === true) {
                    code += ".Alpha";
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_4_3_G18_or_G145.Alpha").replace(/\{\{required\}\}/g, required), code);
                } else {
                    code += ".Fail";
                    HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_4_3_G18_or_G145.Fail").replace(/\{\{required\}\}/g, required).replace(/\{\{value\}\}/g, value) + recommendText, code);
                }
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_4 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_4_G142"), "G142");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_5 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        var imgObj = top.querySelector("img");
        if (imgObj !== null) {
            HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_5_G140,C22,C30.AALevel"), "G140,C22,C30.AALevel");
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_6 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        if (element === top) {
            var failures = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_3_Contrast.testContrastRatio(top, 7, 4.5);
            for (var i = 0; i < failures.length; i++) {
                var element = failures[i].element;
                var decimals = 2;
                var value = Math.round(failures[i].value * Math.pow(10, decimals)) / Math.pow(10, decimals);
                var required = failures[i].required;
                var recommend = failures[i].recommendation;
                var hasBgImg = failures[i].hasBgImage || false;
                var isAbsolute = failures[i].isAbsolute || false;
                while (required === value) {
                    decimals++;
                    value = Math.round(failures[i].value * Math.pow(10, decimals)) / Math.pow(10, decimals);
                }
                if (required === 4.5) {
                    var code = "G18";
                } else if (required === 7) {
                    var code = "G17";
                }
                var recommendText = [];
                if (recommend) {
                    if (recommend.fore.from !== recommend.fore.to) {
                        recommendText.push(_global.HTMLCS.getTranslation("1_4_6_G18_or_G17.Fail.Recomendation.Text").replace(/\{\{value\}\}/g, recommend.fore.to));
                    }
                    if (recommend.back.from !== recommend.back.to) {
                        recommendText.push(_global.HTMLCS.getTranslation("1_4_6_G18_or_G17.Fail.Recomendation.Background").replace(/\{\{value\}\}/g, recommend.back.to));
                    }
                }
                if (recommendText.length > 0) {
                    recommendText = " " + _global.HTMLCS.getTranslation("1_4_6_G18_or_G17.Fail.Recomendation") + " " + recommendText.join(", ") + ".";
                }
                if (isAbsolute === true) {
                    code += ".Abs";
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_4_6_G18_or_G17.Abs").replace(/\{\{required\}\}/g, required), code);
                } else if (hasBgImg === true) {
                    code += ".BgImage";
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("1_4_6_G18_or_G17.BgImage").replace(/\{\{required\}\}/g, required), code);
                } else {
                    code += ".Fail";
                    HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("1_4_6_G18_or_G17.Fail").replace(/\{\{required\}\}/g, required).replace(/\{\{value\}\}/g, value) + recommendText, code);
                }
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_7 = {
    register: function() {
        return [ "object", "embed", "applet", "bgsound", "audio" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("1_4_7_G56"), "G56");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_8 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_8_G148,G156,G175"), "G148,G156,G175");
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_8_H87,C20"), "H87,C20");
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_8_C19,G172,G169"), "C19,G172,G169");
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_8_G188,C21"), "G188,C21");
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_8_H87,G146,C26"), "H87,G146,C26");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_4_1_4_9 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        var imgObj = top.querySelector("img");
        if (imgObj !== null) {
            HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("1_4_9_G140,C22,C30.NoException"), "G140,C22,C30.NoException");
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_1 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        if (element === top) {
            var keyboardTriggers = HTMLCS.util.getAllElements(top, "*[onclick], *[onkeyup], *[onkeydown], *[onkeypress], *[onfocus], *[onblur]");
            keyboardTriggers.forEach(function(elem) {
                if (HTMLCS.util.isKeyboardNavigable(elem) === false) {
                    HTMLCS.addMessage(HTMLCS.WARNING, elem, _global.HTMLCS.getTranslation("2_1_1_G90"), "G90");
                }
            });
            var dblClickEls = HTMLCS.util.getAllElements(top, "*[ondblclick]");
            for (var i = 0; i < dblClickEls.length; i++) {
                HTMLCS.addMessage(HTMLCS.WARNING, dblClickEls[i], _global.HTMLCS.getTranslation("2_1_1_SCR20.DblClick"), "SCR20.DblClick");
            }
            var mouseOverEls = HTMLCS.util.getAllElements(top, "*[onmouseover]");
            for (var i = 0; i < mouseOverEls.length; i++) {
                HTMLCS.addMessage(HTMLCS.WARNING, mouseOverEls[i], _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseOver"), "SCR20.MouseOver");
            }
            var mouseOutEls = HTMLCS.util.getAllElements(top, "*[onmouseout]");
            for (var i = 0; i < mouseOutEls.length; i++) {
                HTMLCS.addMessage(HTMLCS.WARNING, mouseOutEls[i], _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseOut"), "SCR20.MouseOut");
            }
            var mouseMoveEls = HTMLCS.util.getAllElements(top, "*[onmousemove]");
            for (var i = 0; i < mouseMoveEls.length; i++) {
                HTMLCS.addMessage(HTMLCS.WARNING, mouseMoveEls[i], _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseMove"), "SCR20.MouseMove");
            }
            var mouseDownEls = HTMLCS.util.getAllElements(top, "*[onmousedown]");
            for (var i = 0; i < mouseDownEls.length; i++) {
                HTMLCS.addMessage(HTMLCS.WARNING, mouseDownEls[i], _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseDown"), "SCR20.MouseDown");
            }
            var mouseUpEls = HTMLCS.util.getAllElements(top, "*[onmouseup]");
            for (var i = 0; i < mouseUpEls.length; i++) {
                HTMLCS.addMessage(HTMLCS.WARNING, mouseUpEls[i], _global.HTMLCS.getTranslation("2_1_1_SCR20.MouseUp"), "SCR20.MouseUp");
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_2 = {
    register: function() {
        return [ "object", "applet", "embed" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("2_1_2_F10"), "F10");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_1_2_1_4 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_1_4.Check"), "");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_1 = {
    register: function() {
        return [ "meta" ];
    },
    process: function(element, top) {
        if (element.hasAttribute("http-equiv") === true) {
            if (String(element.getAttribute("http-equiv")).toLowerCase() === "refresh") {
                if (/^[1-9]\d*/.test(element.getAttribute("content").toLowerCase()) === true) {
                    if (/url=/.test(element.getAttribute("content").toLowerCase()) === true) {
                        HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("2_2_1_F40.2"), "F40.2");
                    } else {
                        HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("2_2_1_F41.2"), "F41.2");
                    }
                }
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_2 = {
    register: function() {
        return [ "_top", "blink" ];
    },
    process: function(element, top) {
        if (element === top) {
            HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_2_2_SCR33,SCR22,G187,G152,G186,G191"), "SCR33,SCR22,G187,G152,G186,G191");
            var elements = HTMLCS.util.getAllElements(top, "*");
            for (var i = 0; i < elements.length; i++) {
                var computedStyle = HTMLCS.util.style(elements[i]);
                if (computedStyle) {
                    if (/blink/.test(computedStyle["text-decoration"]) === true) {
                        HTMLCS.addMessage(HTMLCS.WARNING, elements[i], _global.HTMLCS.getTranslation("2_2_2_F4"), "F4");
                    }
                }
            }
        } else if (element.nodeName.toLowerCase() === "blink") {
            HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("2_2_2_F47"), "F47");
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_3 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_2_3_G5"), "G5");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_4 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_2_4_SCR14"), "SCR14");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_5 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_2_5_G105,G181"), "G105,G181");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_2_2_2_6 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_2_6.Check"), "");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_1 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_3_1_G19,G176"), "G19,G176");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_2 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_3_2_G19"), "G19");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_3_2_3_3 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_3_3.Check"), "C39");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_1 = {
    register: function() {
        return [ "iframe", "a", "area", "_top" ];
    },
    process: function(element, top) {
        if (element === top) {
            this.testGenericBypassMsg(top);
        } else {
            var nodeName = element.nodeName.toLowerCase();
            switch (nodeName) {
              case "iframe":
                this.testIframeTitle(element);
                break;

              case "a":
              case "area":
                this.testSameDocFragmentLinks(element, top);
                break;
            }
        }
    },
    testIframeTitle: function(element) {
        var nodeName = element.nodeName.toLowerCase();
        if (nodeName === "iframe") {
            var hasTitle = false;
            if (element.hasAttribute("title") === true) {
                if (element.getAttribute("title") && /^\s+$/.test(element.getAttribute("title")) === false) {
                    hasTitle = true;
                }
            }
            if (hasTitle === false) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("2_4_1_H64.1"), "H64.1");
            } else {
                HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_4_1_H64.2"), "H64.2");
            }
        }
    },
    testGenericBypassMsg: function(top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_4_1_G1,G123,G124,H69"), "G1,G123,G124,H69");
    },
    testSameDocFragmentLinks: function(element, top) {
        if (element.hasAttribute("href") === true && HTMLCS.util.isFocusable(element) === true) {
            var href = element.getAttribute("href");
            href = HTMLCS.util.trim(href);
            if (href.length > 1 && href.charAt(0) === "#") {
                var id = href.substr(1);
                try {
                    var doc = top;
                    if (doc.ownerDocument) {
                        doc = doc.ownerDocument;
                    }
                    var target = doc.getElementById(id);
                    if (target === null) {
                        var _doc = HTMLCS.util.getElementWindow(top).document;
                        var doctype = HTMLCS.util.getDocumentType(_doc);
                        var nameSelector = "a";
                        if (doctype && doctype.indexOf("html5") === -1) {
                            nameSelector = "*";
                        }
                        target = doc.querySelector(nameSelector + '[name="' + id + '"]');
                    }
                    if (target === null || HTMLCS.util.contains(top, target) === false) {
                        if (HTMLCS.isFullDoc(top) === true || top.nodeName.toLowerCase() === "body") {
                            HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("2_4_1_G1,G123,G124.NoSuchID").replace(/\{\{id\}\}/g, id), "G1,G123,G124.NoSuchID");
                        } else {
                            HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("2_4_1_G1,G123,G124.NoSuchIDFragment").replace(/\{\{id\}\}/g, id), "G1,G123,G124.NoSuchIDFragment");
                        }
                    }
                } catch (ex) {}
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_2 = {
    register: function() {
        return [ "html" ];
    },
    process: function(element, top) {
        var children = element.childNodes;
        var head = null;
        for (var i = 0; i < children.length; i++) {
            if (children[i].nodeName.toLowerCase() === "head") {
                head = children[i];
                break;
            }
        }
        if (head === null) {
            HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("2_4_2_H25.1.NoHeadEl"), "H25.1.NoHeadEl");
        } else {
            var children = head.childNodes;
            var title = null;
            for (var i = 0; i < children.length; i++) {
                if (children[i].nodeName.toLowerCase() === "title") {
                    title = children[i];
                    break;
                }
            }
            if (title === null) {
                HTMLCS.addMessage(HTMLCS.ERROR, head, _global.HTMLCS.getTranslation("2_4_2_H25.1.NoTitleEl"), "H25.1.NoTitleEl");
            } else {
                if (/^\s*$/.test(title.innerHTML) === true) {
                    HTMLCS.addMessage(HTMLCS.ERROR, title, _global.HTMLCS.getTranslation("2_4_2_H25.1.EmptyTitle"), "H25.1.EmptyTitle");
                } else {
                    HTMLCS.addMessage(HTMLCS.NOTICE, title, _global.HTMLCS.getTranslation("2_4_2_H25.2"), "H25.2");
                }
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_3 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        if (element === top) {
            var tabIndexExists = top.querySelector("*[tabindex]");
            if (tabIndexExists) {
                HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_4_3_H4.2"), "H4.2");
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_4 = {
    register: function() {
        return [ "a" ];
    },
    process: function(element, top) {
        if (element.hasAttribute("title") === true) {
            HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_4_4_H77,H78,H79,H80,H81,H33"), "H77,H78,H79,H80,H81,H33");
        } else {
            HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_4_4_H77,H78,H79,H80,H81"), "H77,H78,H79,H80,H81");
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_5 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_4_5_G125,G64,G63,G161,G126,G185"), "G125,G64,G63,G161,G126,G185");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_6 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_4_6_G130,G131"), "G130,G131");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_7 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        var inputField = top.querySelector("input, textarea, button, select, a");
        if (inputField !== null) {
            HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_4_7_G149,G165,G195,C15,SCR31"), "G149,G165,G195,C15,SCR31");
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_8 = {
    register: function() {
        return [ "link" ];
    },
    process: function(element, top) {
        var linkParentName = element.parentNode.nodeName.toLowerCase();
        if (linkParentName !== "head") {
            HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("2_4_8_H59.1"), "H59.1");
        }
        if (element.hasAttribute("rel") === false || !element.getAttribute("rel") || /^\s*$/.test(element.getAttribute("rel")) === true) {
            HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("2_4_8_H59.2a"), "H59.2a");
        }
        if (element.hasAttribute("href") === false || !element.getAttribute("href") || /^\s*$/.test(element.getAttribute("href")) === true) {
            HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("2_4_8_H59.2b"), "H59.2b");
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_4_2_4_9 = {
    register: function() {
        return [ "a" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("2_4_9_H30"), "H30");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_1 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_5_1.Check"), "");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_2 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_5_2.SinglePointer_Check"), "");
        if (element == top) {
            var allMousedown = HTMLCS.util.getAllElements(top, "*[onmousedown]");
            for (var i = 0; i < allMousedown.length; i++) {
                var x = allMousedown[i];
                HTMLCS.addMessage(HTMLCS.NOTICE, x, _global.HTMLCS.getTranslation("2_5_2.Mousedown_Check"), "");
            }
            var allTouchstart = HTMLCS.util.getAllElements(top, "*[ontouchstart]");
            for (var i = 0; i < allTouchstart.length; i++) {
                var x = allTouchstart[i];
                HTMLCS.addMessage(HTMLCS.NOTICE, x, _global.HTMLCS.getTranslation("2_5_2.Touchstart_Check"), "");
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_3 = {
    register: function() {
        return [ "_top", "a", "button", "label", "input" ];
    },
    process: function(element, top) {
        if (element == top) {
            HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_5_3_F96.Check"), "F96");
        } else {
            var nodeName = element.nodeName.toLowerCase();
            var visibleLabel = "";
            var accessibleName = "";
            switch (nodeName) {
              case "a":
                visibleLabel = HTMLCS.util.getTextContent(element);
                accessibleName = HTMLCS.util.getAccessibleName(element, top);
                break;

              case "button":
                visibleLabel = HTMLCS.util.getTextContent(element);
                accessibleName = HTMLCS.util.getAccessibleName(element, top);
                break;

              case "label":
                visibleLabel = HTMLCS.util.getTextContent(element);
                var labelFor = element.getAttribute("for");
                if (labelFor) {
                    if (top.ownerDocument) {
                        var refNode = top.ownerDocument.getElementById(labelFor);
                    } else {
                        var refNode = top.getElementById(labelFor);
                    }
                    if (refNode) {
                        accessibleName = HTMLCS.util.getAccessibleName(refNode, top);
                    }
                }
                break;

              case "input":
                if (element.getAttribute("type") === "submit") {
                    visibleLabel = element.getAttribute("value");
                }
                accessibleName = HTMLCS.util.getAccessibleName(element, top);
                break;
            }
            if (!!visibleLabel && !!accessibleName) {
                var a = visibleLabel.replace(/[^A-Za-z]/g, "").toLowerCase();
                var b = accessibleName.replace(/[^A-Za-z]/g, "").toLowerCase();
                if (!!a && !!b && b.indexOf(a) === -1) {
                    HTMLCS.addMessage(HTMLCS.WARNING, element, _global.HTMLCS.getTranslation("2_5_3_F96.AccessibleName"), "F96");
                }
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_4 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_5_4.Check"), "");
        if (element == top) {
            var all = HTMLCS.util.getAllElements(element, "*[ondevicemotion]");
            for (var i = 0; i < all.length; i++) {
                var x = all[i];
                HTMLCS.addMessage(HTMLCS.WARNING, x, _global.HTMLCS.getTranslation("2_5_4.Devicemotion"), "");
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_5 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_5_5.Check"), "");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle2_Guideline2_5_2_5_6 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("2_5_6.Check"), "");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1 = {
    register: function() {
        return [ "html" ];
    },
    process: function(element, top) {
        if (element.hasAttribute("lang") === false && element.hasAttribute("xml:lang") === false) {
            HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("3_1_1_H57.2"), "H57.2");
        } else {
            if (element.hasAttribute("lang") === true) {
                var lang = element.getAttribute("lang");
                if (this.isValidLanguageTag(lang) === false) {
                    HTMLCS.addMessage(HTMLCS.ERROR, top, _global.HTMLCS.getTranslation("3_1_1_H57.3.Lang"), "H57.3.Lang");
                }
            }
            if (element.hasAttribute("xml:lang") === true) {
                var lang = element.getAttribute("xml:lang");
                if (this.isValidLanguageTag(lang) === false) {
                    HTMLCS.addMessage(HTMLCS.ERROR, top, _global.HTMLCS.getTranslation("3_1_1_H57.3.XmlLang"), "H57.3.XmlLang");
                }
            }
        }
    },
    isValidLanguageTag: function(langTag) {
        var regexStr = "^([ix](-[a-z0-9]{1,8})+)$|";
        regexStr += "^[a-z]{2,8}";
        regexStr += "(-[a-z]{3}){0,3}";
        regexStr += "(-[a-z]{4})?";
        regexStr += "(-[a-z]{2}|-[0-9]{3})?";
        regexStr += "(-[0-9][a-z0-9]{3}|-[a-z0-9]{5,8})*";
        regexStr += "(-[a-wy-z0-9](-[a-z0-9]{2,8})+)*";
        regexStr += "(-x(-[a-z0-9]{1,8})+)?$";
        var regex = new RegExp(regexStr, "i");
        var valid = true;
        if (regex.test(langTag) === false) {
            valid = false;
        }
        return valid;
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_2 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("3_1_2_H58"), "H58");
        var sc3_1_1 = HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_1;
        var langEls = HTMLCS.util.getAllElements(top, "*[lang]");
        for (var i = 0; i <= langEls.length; i++) {
            if (i === langEls.length) {
                var langEl = top;
            } else {
                var langEl = langEls[i];
            }
            if (!langEl.documentElement && langEl.nodeName.toLowerCase() !== "html") {
                if (langEl.hasAttribute("lang") === true) {
                    var lang = langEl.getAttribute("lang");
                    if (sc3_1_1.isValidLanguageTag(lang) === false) {
                        HTMLCS.addMessage(HTMLCS.ERROR, langEl, _global.HTMLCS.getTranslation("3_1_2_H58.1.Lang"), "H58.1.Lang");
                    }
                }
                if (langEl.hasAttribute("xml:lang") === true) {
                    var lang = langEl.getAttribute("xml:lang");
                    if (sc3_1_1.isValidLanguageTag(lang) === false) {
                        HTMLCS.addMessage(HTMLCS.ERROR, langEl, _global.HTMLCS.getTranslation("3_1_2_H58.1.XmlLang"), "H58.1.XmlLang");
                    }
                }
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_3 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("3_1_3_H40,H54,H60,G62,G70"), "H40,H54,H60,G62,G70");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_4 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("3_1_4_G102,G55,G62,H28,G97"), "G102,G55,G62,H28,G97");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_5 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("3_1_5_G86,G103,G79,G153,G160"), "G86,G103,G79,G153,G160");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_1_3_1_6 = {
    register: function() {
        return [ "ruby" ];
    },
    process: function(element, top) {
        var rb = element.querySelectorAll("rb");
        var rt = element.querySelectorAll("rt");
        if (rt.length === 0) {
            if (rb.length === 0) {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("3_1_6_H62.1.HTML5"), "H62.1.HTML5");
            } else {
                HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("3_1_6_H62.1.XHTML11"), "H62.1.XHTML11");
            }
        }
        var rp = element.querySelectorAll("rp");
        if (rp.length === 0) {
            HTMLCS.addMessage(HTMLCS.ERROR, element, _global.HTMLCS.getTranslation("3_1_6_H62.2"), "H62.2");
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_1 = {
    register: function() {
        return [ "input", "textarea", "button", "select" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("3_2_1_G107"), "G107");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_2 = {
    register: function() {
        return [ "form" ];
    },
    process: function(element, top) {
        var nodeName = element.nodeName.toLowerCase();
        if (nodeName === "form") {
            this.checkFormSubmitButton(element);
        }
    },
    checkFormSubmitButton: function(form) {
        var ok = false;
        var inputButtons = form.querySelectorAll("input[type=submit], input[type=image]");
        if (inputButtons.length > 0) {
            ok = true;
        } else {
            var buttonButtons = form.querySelectorAll("button");
            var nonSubmitButtons = form.querySelectorAll("button[type=reset], button[type=button]");
            if (buttonButtons.length > nonSubmitButtons.length) {
                ok = true;
            }
        }
        if (ok === false) {
            if (form.id) {
                var externalButtons = document.querySelectorAll("button[form], input[form][type=submit], input[form][type=image]");
                Array.prototype.slice.call(externalButtons).forEach(function(el) {
                    switch (el.getAttribute("type")) {
                      case "reset":
                      case "button":
                        return;
                    }
                    if (el.attributes["form"].value === form.id) {
                        ok = true;
                    }
                });
            }
        }
        if (ok === false) {
            HTMLCS.addMessage(HTMLCS.ERROR, form, _global.HTMLCS.getTranslation("3_2_2_H32.2"), "H32.2");
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_3 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("3_2_3_G61"), "G61");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_4 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("3_2_4_G197"), "G197");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_2_3_2_5 = {
    register: function() {
        return [ "a" ];
    },
    process: function(element, top) {
        var nodeName = element.nodeName.toLowerCase();
        if (nodeName === "a") {
            this.checkNewWindowTarget(element);
        }
    },
    checkNewWindowTarget: function(link) {
        var hasTarget = link.hasAttribute("target");
        if (hasTarget === true) {
            var target = link.getAttribute("target") || "";
            if (target === "_blank" && /new window/i.test(link.innerHTML) === false) {
                HTMLCS.addMessage(HTMLCS.WARNING, link, _global.HTMLCS.getTranslation("3_2_5_H83.3"), "H83.3");
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_1 = {
    register: function() {
        return [ "form" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("3_3_1_G83,G84,G85"), "G83,G84,G85");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_2 = {
    register: function() {
        return [ "form" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("3_3_2_G131,G89,G184,H90"), "G131,G89,G184,H90");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_3 = {
    register: function() {
        return [ "form" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("3_3_3_G177"), "G177");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_4 = {
    register: function() {
        return [ "form" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("3_3_4_G98,G99,G155,G164,G168.LegalForms"), "G98,G99,G155,G164,G168.LegalForms");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_5 = {
    register: function() {
        return [ "form" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("3_3_5_G71,G184,G193"), "G71,G184,G193");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle3_Guideline3_3_3_3_6 = {
    register: function() {
        return [ "form" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, element, _global.HTMLCS.getTranslation("3_3_6_G98,G99,G155,G164,G168.AllForms"), "G98,G99,G155,G164,G168.AllForms");
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_1 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        if (element === top) {
            var elsWithIds = HTMLCS.util.getAllElements(top, "*[id]");
            var usedIds = {};
            for (var i = 0; i < elsWithIds.length; i++) {
                var id = elsWithIds[i].getAttribute("id");
                if (/^\s*$/.test(id) === true) {
                    continue;
                }
                if (usedIds[id] !== undefined) {
                    HTMLCS.addMessage(HTMLCS.ERROR, elsWithIds[i], _global.HTMLCS.getTranslation("4_1_1_F77").replace(/\{\{id\}\}/g, id), "F77");
                } else {
                    usedIds[id] = true;
                }
            }
        }
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_2 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        if (element === top) {
            var messages = this.processFormControls(top);
            for (var i = 0; i < messages.errors.length; i++) {
                HTMLCS.addMessage(HTMLCS.ERROR, messages.errors[i].element, messages.errors[i].msg, "H91." + messages.errors[i].subcode);
            }
            for (var i = 0; i < messages.warnings.length; i++) {
                HTMLCS.addMessage(HTMLCS.WARNING, messages.warnings[i].element, messages.warnings[i].msg, "H91." + messages.warnings[i].subcode);
            }
            this.addProcessLinksMessages(top);
        }
    },
    addProcessLinksMessages: function(top) {
        var errors = this.processLinks(top);
        for (var i = 0; i < errors.empty.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, errors.empty[i], _global.HTMLCS.getTranslation("4_1_2_H91.A.Empty"), "H91.A.Empty");
        }
        for (var i = 0; i < errors.emptyWithName.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, errors.emptyWithName[i], _global.HTMLCS.getTranslation("4_1_2_H91.A.EmptyWithName"), "H91.A.EmptyWithName");
        }
        for (var i = 0; i < errors.emptyNoId.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.emptyNoId[i], _global.HTMLCS.getTranslation("4_1_2_H91.A.EmptyNoId"), "H91.A.EmptyNoId");
        }
        for (var i = 0; i < errors.noHref.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, errors.noHref[i], _global.HTMLCS.getTranslation("4_1_2_H91.A.NoHref"), "H91.A.NoHref");
        }
        for (var i = 0; i < errors.placeholder.length; i++) {
            HTMLCS.addMessage(HTMLCS.WARNING, errors.placeholder[i], _global.HTMLCS.getTranslation("4_1_2_H91.A.Placeholder"), "H91.A.Placeholder");
        }
        for (var i = 0; i < errors.noContent.length; i++) {
            HTMLCS.addMessage(HTMLCS.ERROR, errors.noContent[i], _global.HTMLCS.getTranslation("4_1_2_H91.A.NoContent"), "H91.A.NoContent");
        }
    },
    processLinks: function(top) {
        var errors = {
            empty: [],
            emptyWithName: [],
            emptyNoId: [],
            noHref: [],
            placeholder: [],
            noContent: []
        };
        var elements = HTMLCS.util.getAllElements(top, 'a:not([role="button"])');
        for (var el = 0; el < elements.length; el++) {
            var element = elements[el];
            var nameFound = false;
            var hrefFound = false;
            var content = HTMLCS.util.getElementTextContent(element);
            if (element.hasAttribute("title") === true && /^\s*$/.test(element.getAttribute("title")) === false) {
                nameFound = true;
            } else if (/^\s*$/.test(content) === false) {
                nameFound = true;
            }
            if (element.hasAttribute("href") === true && /^\s*$/.test(element.getAttribute("href")) === false) {
                hrefFound = true;
            }
            if (hrefFound === false) {
                if (/^\s*$/.test(content) === true) {
                    if (element.hasAttribute("id") === true) {
                        errors.empty.push(element);
                    } else if (element.hasAttribute("name") === true) {
                        errors.emptyWithName.push(element);
                    } else {
                        errors.emptyNoId.push(element);
                    }
                } else {
                    if (element.hasAttribute("id") === true || element.hasAttribute("name") === true) {
                        errors.noHref.push(element);
                    } else {
                        errors.placeholder.push(element);
                    }
                }
            } else {
                if (nameFound === false) {
                    if (element.querySelectorAll("img").length === 0 && HTMLCS.util.hasValidAriaLabel(element) === false) {
                        errors.noContent.push(element);
                    }
                }
            }
        }
        return errors;
    },
    processFormControls: function(top) {
        var elements = HTMLCS.util.getAllElements(top, 'button, fieldset, input, select, textarea, [role="button"]');
        var errors = [];
        var warnings = [];
        var requiredNames = {
            button: [ "@title", "_content", "@aria-label", "@aria-labelledby" ],
            fieldset: [ "legend", "@aria-label", "@aria-labelledby" ],
            input_button: [ "@value", "@aria-label", "@aria-labelledby" ],
            input_text: [ "label", "@title", "@aria-label", "@aria-labelledby" ],
            input_file: [ "label", "@title", "@aria-label", "@aria-labelledby" ],
            input_password: [ "label", "@title", "@aria-label", "@aria-labelledby" ],
            input_checkbox: [ "label", "@title", "@aria-label", "@aria-labelledby" ],
            input_radio: [ "label", "@title", "@aria-label", "@aria-labelledby" ],
            input_image: [ "@alt", "@title", "@aria-label", "@aria-labelledby" ],
            select: [ "label", "@title", "@aria-label", "@aria-labelledby" ],
            textarea: [ "label", "@title", "@aria-label", "@aria-labelledby" ]
        };
        var html5inputTypes = [ "email", "search", "date", "datetime-local", "month", "number", "tel", "time", "url", "week", "range", "color" ];
        for (var i = 0, l = html5inputTypes.length; i < l; i++) {
            requiredNames["input_" + html5inputTypes[i]] = [ "label", "@title", "@aria-label", "@aria-labelledby" ];
        }
        var requiredValues = {
            select: "option_selected"
        };
        for (var el = 0, ll = elements.length; el < ll; el++) {
            var element = elements[el];
            var nodeName = element.nodeName.toLowerCase();
            var msgSubCode = element.nodeName.substr(0, 1).toUpperCase() + element.nodeName.substr(1).toLowerCase();
            if (nodeName === "input") {
                if (element.hasAttribute("type") === false) {
                    nodeName += "_text";
                } else {
                    nodeName += "_" + element.getAttribute("type").toLowerCase();
                }
                if (nodeName === "input_submit" || nodeName === "input_reset") {
                    nodeName = "input_button";
                }
                var msgSubCode = "Input" + nodeName.substr(6, 1).toUpperCase() + nodeName.substr(7).toLowerCase();
            }
            var matchingRequiredNames = requiredNames[nodeName];
            var requiredValue = requiredValues[nodeName];
            if (!matchingRequiredNames && nodeName !== "input_hidden") {
                matchingRequiredNames = [ "_content", "@aria-label", "@aria-labelledby" ];
            }
            if (matchingRequiredNames) {
                for (var i = 0; i < matchingRequiredNames.length; i++) {
                    var requiredName = matchingRequiredNames[i];
                    if (requiredName === "_content") {
                        var content = HTMLCS.util.getElementTextContent(element);
                        if (/^\s*$/.test(content) === false) {
                            break;
                        }
                    } else if (requiredName === "label") {
                        var hasLabel = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1.testLabelsOnInputs(element, top, true);
                        if (hasLabel !== false) {
                            break;
                        }
                    } else if (requiredName.charAt(0) === "@") {
                        requiredName = requiredName.substr(1, requiredName.length);
                        if ((requiredName === "aria-label" || requiredName === "aria-labelledby") && HTMLCS.util.hasValidAriaLabel(element)) {
                            break;
                        }
                        if (element.hasAttribute(requiredName) === true && /^\s*$/.test(element.getAttribute(requiredName)) === false) {
                            break;
                        }
                    } else {
                        var subEl = element.querySelector(requiredName);
                        if (subEl !== null) {
                            var content = HTMLCS.util.getElementTextContent(subEl);
                            if (/^\s*$/.test(content) === false) {
                                break;
                            }
                        }
                    }
                }
                if (i === matchingRequiredNames.length) {
                    var msgNodeType = nodeName + " " + _global.HTMLCS.getTranslation("4_1_2_element");
                    if (nodeName.substr(0, 6) === "input_") {
                        msgNodeType = nodeName.substr(6) + _global.HTMLCS.getTranslation("4_1_2_input_element");
                    }
                    var builtAttrs = matchingRequiredNames.slice(0, matchingRequiredNames.length);
                    for (var a = 0; a < builtAttrs.length; a++) {
                        if (builtAttrs[a] === "_content") {
                            builtAttrs[a] = _global.HTMLCS.getTranslation("4_1_2_element_content");
                        } else if (builtAttrs[a].charAt(0) === "@") {
                            builtAttrs[a] = builtAttrs[a].substr(1) + " " + _global.HTMLCS.getTranslation("4_1_2_attribute");
                        } else {
                            builtAttrs[a] = builtAttrs[a] + " " + _global.HTMLCS.getTranslation("4_1_2_element");
                        }
                    }
                    var msg = _global.HTMLCS.getTranslation("4_1_2_msg_pattern").replace(/\{\{msgNodeType\}\}/g, msgNodeType).replace(/\{\{builtAttrs\}\}/g, builtAttrs.join(", "));
                    if (element.hasAttribute("role") && element.getAttribute("role") === "button") {
                        msg = _global.HTMLCS.getTranslation("4_1_2_msg_pattern_role_of_button").replace(/\{\{builtAttrs\}\}/g, builtAttrs.join(", "));
                    }
                    errors.push({
                        element: element,
                        msg: msg,
                        subcode: msgSubCode + ".Name"
                    });
                }
            }
            var valueFound = false;
            if (requiredValue === undefined) {
                valueFound = true;
            } else if (requiredValue === "_content") {
                var content = HTMLCS.util.getElementTextContent(element);
                if (/^\s*$/.test(content) === false) {
                    valueFound = true;
                }
            } else if (requiredValue === "option_selected") {
                if (element.hasAttribute("multiple") === false) {
                    var selected = element.querySelector("option[selected]");
                    if (selected !== null) {
                        valueFound = true;
                    }
                } else {
                    valueFound = true;
                }
            } else if (requiredValue.charAt(0) === "@") {
                requiredValue = requiredValue.substr(1, requiredValue.length);
                if (element.hasAttribute(requiredValue) === true) {
                    valueFound = true;
                }
            }
            if (valueFound === false) {
                valuFound = HTMLCS.util.hasValidAriaLabel(element);
            }
            if (valueFound === false) {
                var msgNodeType = nodeName + " " + _global.HTMLCS.getTranslation("4_1_2_element");
                if (nodeName.substr(0, 6) === "input_") {
                    msgNodeType = nodeName.substr(6) + _global.HTMLCS.getTranslation("4_1_2_input_element");
                }
                var msg = _global.HTMLCS.getTranslation("4_1_2_msg_pattern2").replace(/\{\{msgNodeType\}\}/g, msgNodeType);
                var builtAttr = "";
                var warning = false;
                if (requiredValue === "_content") {
                    builtAttr = " " + _global.HTMLCS.getTranslation("4_1_2_msg_add_one");
                } else if (requiredValue === "option_selected") {
                    warning = true;
                    msg = _global.HTMLCS.getTranslation("4_1_2_msg_pattern2").replace(/\{\{msgNodeType\}\}/g, msgNodeType);
                } else if (requiredValue.charAt(0) === "@") {
                    builtAttr = " " + _global.HTMLCS.getTranslation("4_1_2_value_exposed_using_attribute").replace(/\{\{requiredValue\}\}/g, requiredValue);
                } else {
                    builtAttr = " " + _global.HTMLCS.getTranslation("4_1_2_value_exposed_using_element").replace(/\{\{requiredValue\}\}/g, requiredValue);
                }
                msg += builtAttr;
                if (warning === false) {
                    errors.push({
                        element: element,
                        msg: msg,
                        subcode: msgSubCode + ".Value"
                    });
                } else {
                    warnings.push({
                        element: element,
                        msg: msg,
                        subcode: msgSubCode + ".Value"
                    });
                }
            }
        }
        return {
            errors: errors,
            warnings: warnings
        };
    }
};

_global.HTMLCS_WCAG2AAA_Sniffs_Principle4_Guideline4_1_4_1_3 = {
    register: function() {
        return [ "_top" ];
    },
    process: function(element, top) {
        HTMLCS.addMessage(HTMLCS.NOTICE, top, _global.HTMLCS.getTranslation("4_1_3_ARIA22,G199,ARIA19,G83,G84,G85,G139,G177,G194,ARIA23.Check"), "");
    }
};

_global.HTMLCS = new function() {
    var _standards = {};
    var _sniffs = [];
    var _tags = {};
    var _standard = null;
    var _currentSniff = null;
    var _messages = [];
    var _msgOverrides = {};
    this.ERROR = 1;
    this.WARNING = 2;
    this.NOTICE = 3;
    this.lang = "en";
    this.process = function(standard, content, callback, failCallback, language) {
        _standards = {};
        _sniffs = [];
        _tags = {};
        _standard = null;
        if (!content) {
            return false;
        }
        var languages = Object.keys(_global.translation);
        if (language && languages.indexOf(language) !== -1) {
            this.lang = language;
        }
        if (_standards[_getStandardPath(standard)]) {
            HTMLCS.run(callback, content);
        } else {
            this.loadStandard(standard, function() {
                HTMLCS.run(callback, content);
            }, failCallback);
        }
    };
    this.getTranslation = function(text) {
        var translations = _global.translation[this.lang];
        if (!translations) {
            // console.error("Missing translations for language " + this.lang);
            return "";
        }
        var translation = translations[text];
        if (!translation) {
            // console.error('Translation for "' + text + '" does not exist in current language ' + this.lang);
            return "";
        }
        return translation;
    };
    this.loadStandard = function(standard, callback, failCallback) {
        if (!standard) {
            return false;
        }
        _includeStandard(standard, function() {
            _standard = standard;
            callback.call(this);
        }, failCallback);
    };
    this.run = function(callback, content) {
        var element = null;
        var loadingFrame = false;
        if (typeof content === "string") {
            loadingFrame = true;
            var elementFrame = document.createElement("iframe");
            elementFrame.style.display = "none";
            elementFrame = document.body.insertBefore(elementFrame, null);
            if (elementFrame.contentDocument) {
                element = elementFrame.contentDocument;
            } else if (element.contentWindow) {
                element = elementFrame.contentWindow.document;
            }
            elementFrame.load = function() {
                this.onreadystatechange = null;
                this.onload = null;
                if (HTMLCS.isFullDoc(content) === false) {
                    element = element.getElementsByTagName("body")[0];
                    var div = element.getElementsByTagName("div")[0];
                    if (div && div.id === "__HTMLCS-source-wrap") {
                        div.id = "";
                        element = div;
                    }
                }
                var elements = HTMLCS.util.getAllElements(element);
                elements.unshift(element);
                _run(elements, element, callback);
            };
            elementFrame.onreadystatechange = function() {
                if (/^(complete|loaded)$/.test(this.readyState) === true) {
                    this.onreadystatechange = null;
                    this.load();
                }
            };
            elementFrame.onload = elementFrame.load;
            if (HTMLCS.isFullDoc(content) === false && content.indexOf("<body") === -1) {
                element.write('<div id="__HTMLCS-source-wrap">' + content + "</div>");
            } else {
                element.write(content);
            }
            element.close();
        } else {
            element = content;
        }
        if (!element) {
            callback.call(this);
            return;
        }
        callback = callback || function() {};
        _messages = [];
        var elements = HTMLCS.util.getAllElements(element);
        elements.unshift(element);
        if (loadingFrame === false) {
            _run(elements, element, callback);
        }
    };
    this.isFullDoc = function(content) {
        var fullDoc = false;
        if (typeof content === "string") {
            if (content.toLowerCase().indexOf("<html") !== -1) {
                fullDoc = true;
            } else if (content.toLowerCase().indexOf("<head") !== -1 && content.toLowerCase().indexOf("<body") !== -1) {
                fullDoc = true;
            }
        } else {
            if (content.nodeName.toLowerCase() === "html" || content.documentElement) {
                fullDoc = true;
            }
        }
        return fullDoc;
    };
    this.addMessage = function(type, element, msg, code, data) {
        code = _getMessageCode(code);
        _messages.push({
            type: type,
            element: element,
            msg: _msgOverrides[code] || msg,
            code: code,
            data: data
        });
    };
    this.getMessages = function() {
        return _messages.concat([]);
    };
    var _run = function(elements, topElement, callback) {
        var topMsgs = [];
        while (elements.length > 0) {
            var element = elements.shift();
            if (element === topElement) {
                var tagName = "_top";
            } else {
                var tagName = element.tagName.toLowerCase();
            }
            for (var i = 0; i < topMsgs.length; ) {
                if (element === topMsgs[i].element) {
                    _messages.push(topMsgs[i]);
                    topMsgs.splice(i, 1);
                } else {
                    i++;
                }
            }
            if (_tags[tagName] && _tags[tagName].length > 0) {
                _processSniffs(element, _tags[tagName].concat([]), topElement);
                if (tagName === "_top") {
                    topMsgs = _messages;
                    _messages = [];
                }
            }
        }
        _messages = _messages.concat(topMsgs);
        var presentationElems = topElement.querySelectorAll('[role="presentation"]');
        _currentSniff = HTMLCS_WCAG2AAA_Sniffs_Principle1_Guideline1_3_1_3_1;
        [].forEach.call(presentationElems, function(element) {
            _currentSniff.testSemanticPresentationRole(element);
        });
        if (callback instanceof Function === true) {
            callback.call(this);
        }
    };
    var _processSniffs = function(element, sniffs, topElement, callback) {
        while (sniffs.length > 0) {
            var sniff = sniffs.shift();
            _currentSniff = sniff;
            if (sniff.useCallback === true) {
                sniff.process(element, topElement, function() {
                    _processSniffs(element, sniffs, topElement);
                    sniffs = [];
                });
            } else {
                sniff.process(element, topElement);
            }
        }
        if (callback instanceof Function === true) {
            callback.call(this);
        }
    };
    var _includeStandard = function(standard, callback, failCallback, options) {
        if (standard.indexOf("http") !== 0) {
            standard = _getStandardPath(standard);
        }
        var parts = standard.split("/");
        var ruleSet = _global["HTMLCS_" + parts[parts.length - 2]];
        if (ruleSet) {
            _registerStandard(standard, callback, failCallback, options);
        } else {
            _includeScript(standard, function() {
                _registerStandard(standard, callback, failCallback, options);
            }, failCallback);
        }
    };
    var _registerStandard = function(standard, callback, failCallback, options) {
        var parts = standard.split("/");
        var oldRuleSet = _global["HTMLCS_" + parts[parts.length - 2]];
        var ruleSet = {};
        for (var x in oldRuleSet) {
            if (oldRuleSet.hasOwnProperty(x) === true) {
                ruleSet[x] = oldRuleSet[x];
            }
        }
        if (!ruleSet) {
            return false;
        }
        _standards[standard] = ruleSet;
        if (options) {
            if (options.include && options.include.length > 0) {
                ruleSet.sniffs = options.include;
            } else if (options.exclude) {
                for (var i = 0; i < options.exclude.length; i++) {
                    var index = ruleSet.sniffs.find(options.exclude[i]);
                    if (index >= 0) {
                        ruleSet.sniffs.splice(index, 1);
                    }
                }
            }
        }
        var sniffs = ruleSet.sniffs.slice(0, ruleSet.sniffs.length);
        _registerSniffs(standard, sniffs, callback, failCallback);
    };
    var _registerSniffs = function(standard, sniffs, callback, failCallback) {
        if (sniffs.length === 0) {
            callback.call(this);
            return;
        }
        var sniff = sniffs.shift();
        _loadSniffFile(standard, sniff, function() {
            _registerSniffs(standard, sniffs, callback, failCallback);
        }, failCallback);
    };
    var _loadSniffFile = function(standard, sniff, callback, failCallback) {
        if (typeof sniff === "string") {
            var sniffObj = _getSniff(standard, sniff);
            var cb = function() {
                _registerSniff(standard, sniff);
                callback.call(this);
            };
            if (sniffObj) {
                cb();
            } else {
                _includeScript(_getSniffPath(standard, sniff), cb, failCallback);
            }
        } else {
            _includeStandard(sniff.standard, function() {
                if (sniff.messages) {
                    for (var msg in sniff.messages) {
                        _msgOverrides[msg] = sniff.messages[msg];
                    }
                }
                callback.call(this);
            }, failCallback, {
                exclude: sniff.exclude,
                include: sniff.include
            });
        }
    };
    var _registerSniff = function(standard, sniff) {
        var sniffObj = _getSniff(standard, sniff);
        if (!sniffObj) {
            return false;
        }
        if (sniffObj.register) {
            var watchedTags = sniffObj.register();
            for (var i = 0; i < watchedTags.length; i++) {
                if (!_tags[watchedTags[i]]) {
                    _tags[watchedTags[i]] = [];
                }
                _tags[watchedTags[i]].push(sniffObj);
            }
        }
        _sniffs.push(sniffObj);
    };
    var _getSniffPath = function(standard, sniff) {
        var parts = standard.split("/");
        parts.pop();
        var path = parts.join("/") + "/Sniffs/" + sniff.replace(/\./g, "/") + ".js";
        return path;
    };
    var _getStandardPath = function(standard) {
        var scripts = document.getElementsByTagName("script");
        var path = null;
        for (var i = 0; i < scripts.length; i++) {
            if (scripts[i].src) {
                if (scripts[i].src.match(/HTMLCS\.js/)) {
                    path = scripts[i].src.replace(/HTMLCS\.js/, "");
                    path = path.substring(0, path.indexOf("?"));
                    break;
                }
            }
        }
        return path + "Standards/" + standard + "/ruleset.js";
    };
    var _getSniff = function(standard, sniff) {
        var name = "HTMLCS_";
        name += _standards[standard].name + "_Sniffs_";
        name += sniff.split(".").join("_");
        if (!_global[name]) {
            return null;
        }
        _global[name]._name = sniff;
        return _global[name];
    };
    var _getMessageCode = function(code) {
        code = _standard + "." + _currentSniff._name + "." + code;
        return code;
    };
    var _includeScript = function(src, callback, failCallback) {
        var script = document.createElement("script");
        script.onload = function() {
            script.onload = null;
            script.onreadystatechange = null;
            callback.call(this);
        };
        script.onerror = function() {
            script.onload = null;
            script.onreadystatechange = null;
            if (failCallback) {
                failCallback.call(this);
            }
        };
        script.onreadystatechange = function() {
            if (/^(complete|loaded)$/.test(this.readyState) === true) {
                script.onreadystatechange = null;
                script.onload();
            }
        };
        script.src = src;
        if (document.head) {
            document.head.appendChild(script);
        } else {
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    };
}();

_global.HTMLCS.util = function() {
    var self = {};
    self.trim = function(string) {
        return string.replace(/^\s*(.*)\s*$/g, "$1");
    };
    self.isStringEmpty = function(string) {
        if (typeof string !== "string") {
            return true;
        }
        var empty = true;
        if (string.indexOf(String.fromCharCode(160)) !== -1) {
            empty = false;
        } else if (/^\s*$/.test(string) === false) {
            empty = false;
        }
        return empty;
    };
    self.getDocumentType = function(document) {
        var retval = null;
        var doctype = document.doctype;
        if (doctype) {
            var doctypeName = doctype.name;
            var publicId = doctype.publicId;
            var systemId = doctype.systemId;
            if (doctypeName === null) {
                doctypeName = "";
            }
            if (systemId === null) {
                systemId = "";
            }
            if (publicId === null) {
                publicId = "";
            }
            if (doctypeName.toLowerCase() === "html") {
                if (publicId === "" && systemId === "") {
                    retval = "html5";
                } else if (publicId.indexOf("//DTD HTML 4.01") !== -1 || systemId.indexOf("w3.org/TR/html4/strict.dtd") !== -1) {
                    retval = "html401";
                } else if (publicId.indexOf("//DTD HTML 4.0") !== -1 || systemId.indexOf("w3.org/TR/REC-html40/strict.dtd") !== -1) {
                    retval = "html40";
                } else if (publicId.indexOf("//DTD XHTML 1.0 Strict") !== -1 && systemId.indexOf("w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd") !== -1) {
                    retval = "xhtml10";
                } else if (publicId.indexOf("//DTD XHTML 1.1") !== -1 && systemId.indexOf("w3.org/TR/xhtml11/DTD/xhtml11.dtd") !== -1) {
                    retval = "xhtml11";
                }
                if (systemId.indexOf("about:legacy-compat") !== -1) {
                    if (document.contentType === "application/xhtml+xml") {
                        var htmlElement = document.querySelector("html");
                        if (htmlElement.getAttribute("xmlns") === "http://www.w3.org/1999/xhtml") {
                            retval = "xhtml5";
                        }
                    }
                }
            }
        } else {
            if (document.contentType === "application/xhtml+xml") {
                var htmlElement = document.querySelector("html");
                if (htmlElement.getAttribute("xmlns") === "http://www.w3.org/1999/xhtml") {
                    retval = "xhtml5";
                }
            }
        }
        return retval;
    };
    self.getElementWindow = function(element) {
        if (element.ownerDocument) {
            var doc = element.ownerDocument;
        } else {
            var doc = element;
        }
        var window = null;
        if (doc.defaultView) {
            window = doc.defaultView;
        } else {
            window = doc.parentWindow;
        }
        return window;
    };
    self.hasValidAriaLabel = function(element) {
        var found = false;
        if (element.hasAttribute("aria-labelledby") === true) {
            var labelledByIds = element.getAttribute("aria-labelledby").split(/\s+/);
            labelledByIds.forEach(function(id) {
                var elem = document.getElementById(id);
                if (elem) {
                    var text = self.getElementTextContent(elem);
                    if (/^\s*$/.test(text) === false) {
                        found = true;
                    }
                }
            });
        } else if (element.hasAttribute("aria-label") === true) {
            var text = element.getAttribute("aria-label");
            if (/^\s*$/.test(text) === false) {
                found = true;
            }
        }
        return found;
    };
    self.style = function(element, pseudo) {
        var computedStyle = null;
        var window = self.getElementWindow(element);
        var pseudo = pseudo || null;
        if (element.currentStyle) {
            computedStyle = element.currentStyle;
        } else if (window.getComputedStyle) {
            computedStyle = window.getComputedStyle(element, pseudo);
        }
        return computedStyle;
    };
    self.isVisuallyHidden = function(element) {
        var hidden = false;
        if (element.nodeName.toLowerCase() === "title" && self.findParentNode(element, "svg") !== null) {
            return true;
        }
        var style = self.style(element);
        if (style !== null) {
            if (style.visibility === "hidden" || style.display === "none") {
                hidden = true;
            }
            if (parseInt(style.left, 10) + parseInt(style.width, 10) < 0) {
                hidden = true;
            }
            if (parseInt(style.top, 10) + parseInt(style.height, 10) < 0) {
                hidden = true;
            }
        }
        return hidden;
    };
    self.isAriaHidden = function(element) {
        do {
            if (element.hasAttribute("aria-hidden") && element.getAttribute("aria-hidden") === "true") {
                return true;
            }
        } while (element = element.parentElement);
        return false;
    };
    self.isAccessibilityHidden = function(element) {
        do {
            if (element.hasAttribute("role") && element.getAttribute("role") === "presentation") {
                return true;
            }
            if (element.hasAttribute("aria-hidden") && element.getAttribute("aria-hidden") === "true") {
                return true;
            }
        } while (element = element.parentElement);
        return false;
    };
    self.isFocusable = function(element) {
        var nodeName = element.nodeName.toLowerCase();
        if (self.isDisabled(element) === true) {
            return false;
        }
        if (self.isVisuallyHidden(element) === true) {
            return false;
        }
        if (/^(input|select|textarea|button|object)$/.test(nodeName)) {
            return true;
        }
        if (nodeName === "a" && element.hasAttribute("href") && /^\s*$/.test(element.getAttribute("href")) === false) {
            return true;
        }
        return false;
    };
    self.isKeyboardTabbable = function(element) {
        if (element.hasAttribute("tabindex") === true) {
            var index = element.getAttribute("tabindex");
            if (index === "-1") {
                return false;
            } else {
                return true;
            }
        }
        return self.isFocusable(element);
    };
    self.isKeyboardNavigable = function(element) {
        if (element.hasAttribute("accesskey") && /^\s*$/.test(element.getAttribute("accesskey")) === false) {
            return true;
        }
        return self.isKeyboardTabbable(element);
    };
    self.isDisabled = function(element) {
        var disabled = false;
        if (element.disabled === true || element.getAttribute("aria-disabled") === "true") {
            disabled = true;
        }
        return disabled;
    };
    self.isInDocument = function(element) {
        var parent = element.parentNode;
        while (parent && parent.ownerDocument) {
            parent = parent.parentNode;
        }
        if (parent === null) {
            return false;
        }
        return true;
    };
    self.getAllElements = function(element, selector) {
        element = element || document;
        selector = selector || "*";
        var elements = Array.prototype.slice.call(element.querySelectorAll(selector));
        var visible = elements.filter(function(elem) {
            return HTMLCS.util.isAccessibilityHidden(elem) === false;
        });
        var auditor = document.getElementById("HTMLCS-wrapper");
        if (auditor) {
            visible = visible.filter(function(elem) {
                return auditor.contains(elem) === false;
            });
        }
        return visible;
    };
    self.contains = function(parent, child) {
        var contained = false;
        if (parent !== child) {
            if (!parent.ownerDocument) {
                if (child.ownerDocument && child.ownerDocument === parent) {
                    contained = true;
                }
            } else {
                if (parent.contains && parent.contains(child) === true) {
                    contained = true;
                } else if (parent.compareDocumentPosition && (parent.compareDocumentPosition(child) & 16) > 0) {
                    contained = true;
                }
            }
        }
        return contained;
    };
    self.isLayoutTable = function(table) {
        var th = table.querySelector("th");
        if (th === null) {
            return true;
        }
        return false;
    };
    self.contrastRatio = function(colour1, colour2) {
        var ratio = (.05 + self.relativeLum(colour1)) / (.05 + self.relativeLum(colour2));
        if (ratio < 1) {
            ratio = 1 / ratio;
        }
        return ratio;
    };
    self.relativeLum = function(colour) {
        if (colour.charAt) {
            var colour = self.colourStrToRGB(colour);
        }
        var transformed = {};
        for (var x in colour) {
            if (colour[x] <= .03928) {
                transformed[x] = colour[x] / 12.92;
            } else {
                transformed[x] = Math.pow((colour[x] + .055) / 1.055, 2.4);
            }
        }
        var lum = transformed.red * .2126 + transformed.green * .7152 + transformed.blue * .0722;
        return lum;
    };
    self.colourStrToRGB = function(colour) {
        colour = colour.toLowerCase();
        if (colour.substring(0, 3) === "rgb") {
            var matches = /^rgba?\s*\((\d+),\s*(\d+),\s*(\d+)([^)]*)\)$/.exec(colour);
            colour = {
                red: matches[1] / 255,
                green: matches[2] / 255,
                blue: matches[3] / 255,
                alpha: 1
            };
            if (matches[4]) {
                colour.alpha = parseFloat(/^,\s*(.*)$/.exec(matches[4])[1]);
            }
        } else {
            if (colour.charAt(0) === "#") {
                colour = colour.substr(1);
            }
            if (colour.length === 3) {
                colour = colour.replace(/^(.)(.)(.)$/, "$1$1$2$2$3$3");
            }
            if (colour.length === 4) {
                colour = colour.replace(/^(.)(.)(.)(.)$/, "$1$1$2$2$3$3$4$4");
            }
            var alpha = 1;
            if (colour.length === 8) {
                alpha = parseInt(colour.substr(6, 2), 16) / 255;
            }
            colour = {
                red: parseInt(colour.substr(0, 2), 16) / 255,
                green: parseInt(colour.substr(2, 2), 16) / 255,
                blue: parseInt(colour.substr(4, 2), 16) / 255,
                alpha: alpha
            };
        }
        return colour;
    };
    self.RGBtoColourStr = function(colour) {
        colourStr = "#";
        colour.red = Math.round(colour.red * 255);
        colour.green = Math.round(colour.green * 255);
        colour.blue = Math.round(colour.blue * 255);
        if (colour.red % 17 === 0 && colour.green % 17 === 0 && colour.blue % 17 === 0) {
            colourStr += (colour.red / 17).toString(16);
            colourStr += (colour.green / 17).toString(16);
            colourStr += (colour.blue / 17).toString(16);
        } else {
            if (colour.red < 16) {
                colourStr += "0";
            }
            colourStr += colour.red.toString(16);
            if (colour.green < 16) {
                colourStr += "0";
            }
            colourStr += colour.green.toString(16);
            if (colour.blue < 16) {
                colourStr += "0";
            }
            colourStr += colour.blue.toString(16);
        }
        return colourStr;
    };
    self.sRGBtoHSV = function(colour) {
        if (colour.charAt) {
            colour = self.colourStrToRGB(colour);
        }
        var hsvColour = {
            hue: 0,
            saturation: 0,
            value: 0
        };
        var maxColour = Math.max(colour.red, colour.green, colour.blue);
        var minColour = Math.min(colour.red, colour.green, colour.blue);
        var chroma = maxColour - minColour;
        if (chroma === 0) {
            hsvColour.value = colour.red;
        } else {
            hsvColour.value = maxColour;
            if (maxColour === colour.red) {
                hsvColour.hue = (colour.green - colour.blue) / chroma;
            } else if (maxColour === colour.green) {
                hsvColour.hue = 2 + (colour.blue - colour.red) / chroma;
            } else {
                hsvColour.hue = 4 + (colour.red - colour.green) / chroma;
            }
            hsvColour.hue = hsvColour.hue * 60;
            if (hsvColour.hue >= 360) {
                hsvColour.hue -= 360;
            }
            hsvColour.saturation = chroma / hsvColour.value;
        }
        return hsvColour;
    };
    self.HSVtosRGB = function(hsvColour) {
        var colour = {
            red: 0,
            green: 0,
            blue: 0
        };
        if (hsvColour.saturation === 0) {
            colour.red = hsvColour.value;
            colour.green = hsvColour.value;
            colour.blue = hsvColour.value;
        } else {
            var chroma = hsvColour.value * hsvColour.saturation;
            var minColour = hsvColour.value - chroma;
            var interHue = hsvColour.hue / 60;
            var interHueMod = interHue - 2 * Math.floor(interHue / 2);
            var interCol = chroma * (1 - Math.abs(interHueMod - 1));
            switch (Math.floor(interHue)) {
              case 0:
                colour.red = chroma;
                colour.green = interCol;
                break;

              case 1:
                colour.green = chroma;
                colour.red = interCol;
                break;

              case 2:
                colour.green = chroma;
                colour.blue = interCol;
                break;

              case 3:
                colour.blue = chroma;
                colour.green = interCol;
                break;

              case 4:
                colour.blue = chroma;
                colour.red = interCol;
                break;

              case 5:
                colour.red = chroma;
                colour.blue = interCol;
                break;
            }
            colour.red = colour.red + minColour;
            colour.green = colour.green + minColour;
            colour.blue = colour.blue + minColour;
        }
        return colour;
    };
    self.getElementTextContent = function(element, includeAlt) {
        if (includeAlt === undefined) {
            includeAlt = true;
        }
        var element = element.cloneNode(true);
        var nodes = [];
        for (var i = 0; i < element.childNodes.length; i++) {
            nodes.push(element.childNodes[i]);
        }
        var text = [ element.textContent ];
        while (nodes.length > 0) {
            var node = nodes.shift();
            if (node.nodeType === 1) {
                if (node.nodeName.toLowerCase() === "img") {
                    if (includeAlt === true && node.hasAttribute("alt") === true) {
                        text.push(node.getAttribute("alt"));
                    }
                } else {
                    for (var i = 0; i < node.childNodes.length; i++) {
                        nodes.push(node.childNodes[i]);
                    }
                }
            } else if (node.nodeType === 3) {
                text.push(node.nodeValue);
            }
        }
        text = text.join("").replace(/^\s+|\s+$/g, "");
        return text;
    };
    self.findParentNode = function(node, selector) {
        if (node && node.matches && node.matches(selector)) {
            return node;
        }
        while (node && node.parentNode) {
            node = node.parentNode;
            if (node && node.matches && node.matches(selector)) {
                return node;
            }
        }
        return null;
    };
    self.eachParentNode = function(node, cb) {
        while (node && node.parentNode) {
            cb(node);
            node = node.parentNode;
        }
    };
    self.isPhrasingNode = function(nodeName) {
        var nodeNames = [ "abbr", "audio", "b", "bdo", "br", "button", "canvas", "cite", "code", "command", "data", "datalist", "dfn", "em", "embed", "i", "iframe", "img", "input", "kbd", "keygen", "label", "mark", "math", "meter", "noscript", "object", "output", "progress", "q", "ruby", "samp", "script", "select", "small", "span", "strong", "sub", "sup", "svg", "textarea", "time", "var", "video", "wbr" ];
        return nodeNames.indexOf(nodeName.toLowerCase()) !== -1;
    };
    self.getChildrenForTable = function(table, childNodeName) {
        if (table.nodeName.toLowerCase() !== "table") {
            return null;
        }
        var rows = [];
        var allRows = table.getElementsByTagName(childNodeName);
        for (var i = 0, l = allRows.length; i < l; i++) {
            if (self.findParentNode(allRows[i], "table") === table) {
                rows.push(allRows[i]);
            }
        }
        return rows;
    };
    self.testTableHeaders = function(element) {
        var retval = {
            required: true,
            used: false,
            correct: true,
            allowScope: true,
            missingThId: [],
            missingTd: [],
            wrongHeaders: [],
            isMultiLevelHeadersTable: false
        };
        var rows = self.getChildrenForTable(element, "tr");
        var tdCells = {};
        var skipCells = [];
        var headerIds = {
            rows: [],
            cols: []
        };
        var multiHeaders = {
            rows: 0,
            cols: 0
        };
        var missingIds = false;
        for (var rownum = 0; rownum < rows.length; rownum++) {
            var row = rows[rownum];
            var colnum = 0;
            for (var item = 0; item < row.childNodes.length; item++) {
                var cell = row.childNodes[item];
                if (cell.nodeType === 1) {
                    if (skipCells[rownum]) {
                        while (skipCells[rownum][0] === colnum) {
                            skipCells[rownum].shift();
                            colnum++;
                        }
                    }
                    var nodeName = cell.nodeName.toLowerCase();
                    var rowspan = Number(cell.getAttribute("rowspan")) || 1;
                    var colspan = Number(cell.getAttribute("colspan")) || 1;
                    if (rowspan > 1) {
                        for (var i = rownum + 1; i < rownum + rowspan; i++) {
                            if (!skipCells[i]) {
                                skipCells[i] = [];
                            }
                            for (var j = colnum; j < colnum + colspan; j++) {
                                skipCells[i].push(j);
                            }
                        }
                    }
                    if (nodeName === "th") {
                        var id = cell.getAttribute("id") || "";
                        if (id === "") {
                            retval.correct = false;
                            retval.missingThId.push(cell);
                        }
                        if (rowspan > 1 && colspan > 1) {
                            retval.allowScope = false;
                        } else if (retval.allowScope === true) {
                            if (headerIds.cols[colnum] === undefined) {
                                headerIds.cols[colnum] = 0;
                            }
                            if (headerIds.rows[rownum] === undefined) {
                                headerIds.rows[rownum] = 0;
                            }
                            headerIds.rows[rownum] += colspan;
                            headerIds.cols[colnum] += rowspan;
                        }
                    } else if (nodeName === "td") {
                        if (cell.hasAttribute("headers") === true && /^\s*$/.test(cell.getAttribute("headers")) === false) {
                            retval.used = true;
                        }
                    }
                    colnum += colspan;
                }
            }
        }
        for (var i = 0; i < headerIds.rows.length; i++) {
            if (headerIds.rows[i] > 1) {
                multiHeaders.rows++;
            }
        }
        for (var i = 0; i < headerIds.cols.length; i++) {
            if (headerIds.cols[i] > 1) {
                multiHeaders.cols++;
            }
        }
        if (multiHeaders.rows > 1 || multiHeaders.cols > 1) {
            retval.allowScope = false;
            retval.isMultiLevelHeadersTable = true;
        } else if (retval.allowScope === true && (multiHeaders.rows === 0 || multiHeaders.cols === 0)) {
            retval.required = false;
        }
        var cells = HTMLCS.util.getCellHeaders(element);
        for (var i = 0; i < cells.length; i++) {
            var cell = cells[i].cell;
            var expected = cells[i].headers;
            if (cell.hasAttribute("headers") === false) {
                retval.correct = false;
                retval.missingTd.push(cell);
            } else {
                var actual = (cell.getAttribute("headers") || "").split(/\s+/);
                if (actual.length === 0) {
                    retval.correct = false;
                    retval.missingTd.push(cell);
                } else {
                    actual = " " + actual.sort().join(" ") + " ";
                    actual = actual.replace(/\s+/g, " ").replace(/(\w+\s)\1+/g, "$1").replace(/^\s*(.*?)\s*$/g, "$1");
                    if (expected !== actual) {
                        retval.correct = false;
                        var val = {
                            element: cell,
                            expected: expected,
                            actual: cell.getAttribute("headers") || ""
                        };
                        retval.wrongHeaders.push(val);
                    }
                }
            }
        }
        return retval;
    };
    self.getCellHeaders = function(table) {
        if (typeof table !== "object") {
            return null;
        } else if (table.nodeName.toLowerCase() !== "table") {
            return null;
        }
        var rows = self.getChildrenForTable(table, "tr");
        var skipCells = [];
        var headingIds = {
            rows: {},
            cols: {}
        };
        var cells = [];
        var targetNodeNames = [ "th", "td" ];
        for (var k = 0; k < targetNodeNames.length; k++) {
            var targetNode = targetNodeNames[k];
            for (var rownum = 0; rownum < rows.length; rownum++) {
                var row = rows[rownum];
                var colnum = 0;
                for (var item = 0; item < row.childNodes.length; item++) {
                    var thisCell = row.childNodes[item];
                    if (thisCell.nodeType === 1) {
                        if (skipCells[rownum]) {
                            while (skipCells[rownum][colnum]) {
                                colnum++;
                            }
                        }
                        var nodeName = thisCell.nodeName.toLowerCase();
                        var rowspan = Number(thisCell.getAttribute("rowspan")) || 1;
                        var colspan = Number(thisCell.getAttribute("colspan")) || 1;
                        if (rowspan > 1) {
                            for (var i = rownum + 1; i < rownum + rowspan; i++) {
                                if (!skipCells[i]) {
                                    skipCells[i] = [];
                                }
                                for (var j = colnum; j < colnum + colspan; j++) {
                                    skipCells[i][j] = true;
                                }
                            }
                        }
                        if (nodeName === targetNode) {
                            if (nodeName === "th") {
                                var id = thisCell.getAttribute("id") || "";
                                for (var i = rownum; i < rownum + rowspan; i++) {
                                    headingIds.rows[i] = headingIds.rows[i] || {
                                        first: colnum,
                                        ids: []
                                    };
                                    headingIds.rows[i].ids.push(id);
                                }
                                for (var i = colnum; i < colnum + colspan; i++) {
                                    headingIds.cols[i] = headingIds.cols[i] || {
                                        first: rownum,
                                        ids: []
                                    };
                                    headingIds.cols[i].ids.push(id);
                                }
                            } else if (nodeName === "td") {
                                var exp = [];
                                for (var i = rownum; i < rownum + rowspan; i++) {
                                    for (var j = colnum; j < colnum + colspan; j++) {
                                        if (headingIds.rows[i] && j >= headingIds.rows[i].first) {
                                            exp = exp.concat(headingIds.rows[i].ids);
                                        }
                                        if (headingIds.cols[j] && i >= headingIds.cols[j].first) {
                                            exp = exp.concat(headingIds.cols[j].ids);
                                        }
                                    }
                                }
                                if (exp.length > 0) {
                                    var filteredExp = exp.sort().filter(function(value, index, self) {
                                        return self.indexOf(value) === index;
                                    });
                                    exp = " " + filteredExp.join(" ") + " ";
                                    exp = exp.replace(/\s+/g, " ").replace(/(\w+\s)\1+/g, "$1").replace(/^\s*(.*?)\s*$/g, "$1");
                                    cells.push({
                                        cell: thisCell,
                                        headers: exp
                                    });
                                }
                            }
                        }
                        colnum += colspan;
                    }
                }
            }
        }
        return cells;
    };
    self.getPreviousSiblingElement = function(element, tagName, immediate) {
        if (tagName === undefined) {
            tagName = null;
        }
        if (immediate === undefined) {
            immediate = false;
        }
        var prevNode = element.previousSibling;
        while (prevNode !== null) {
            if (prevNode.nodeType === 3) {
                if (HTMLCS.util.isStringEmpty(prevNode.nodeValue) === false && immediate === true) {
                    prevNode = null;
                    break;
                }
            } else if (prevNode.nodeType === 1) {
                if (tagName === null || prevNode.nodeName.toLowerCase() === tagName) {
                    break;
                } else if (immediate === true) {
                    prevNode = null;
                    break;
                }
                break;
            }
            prevNode = prevNode.previousSibling;
        }
        return prevNode;
    };
    self.getNextSiblingElement = function(element, tagName, immediate) {
        if (tagName === undefined) {
            tagName = null;
        }
        if (immediate === undefined) {
            immediate = false;
        }
        var nextNode = element.nextSibling;
        while (nextNode !== null) {
            if (nextNode.nodeType === 3) {
                if (HTMLCS.util.isStringEmpty(nextNode.nodeValue) === false && immediate === true) {
                    nextNode = null;
                    break;
                }
            } else if (nextNode.nodeType === 1) {
                if (tagName === null || nextNode.nodeName.toLowerCase() === tagName) {
                    break;
                } else if (immediate === true) {
                    nextNode = null;
                    break;
                }
                break;
            }
            nextNode = nextNode.nextSibling;
        }
        return nextNode;
    };
    self.getTextContent = function(element) {
        if (element.textContent !== undefined) {
            return element.textContent;
        } else {
            return element.innerText;
        }
    };
    self.getAccessibleName = function(element, top) {
        if (self.isVisuallyHidden(element)) {
            return "";
        } else if (element.getAttribute("aria-labelledby")) {
            var nameParts = [];
            var parts = element.getAttribute("aria-labelledby").split(" ");
            for (var i = 0; i < parts.length; i++) {
                var x = parts[i];
                var nameElement = top.getElementById(x);
                if (nameElement) {
                    nameParts.push(nameElement.textContent);
                }
            }
            return nameParts.join(" ");
        } else if (element.getAttribute("aria-label")) {
            return element.getAttribute("aria-label");
        } else if (element.getAttribute("title")) {
            if (element.getAttribute("role") !== "presentation" && element.getAttribute("role") !== "none") {
                return element.getAttribute("aria-label");
            }
        }
        return "";
    };
    return self;
}();

var HTMLCS_RUNNER = _global.HTMLCS_RUNNER = new function() {
    this.run = function(standard, callback) {
        var self = this;
        HTMLCS.process(standard, document, function() {
            var messages = HTMLCS.getMessages();
            var length = messages.length;
            var msgCount = {};
            msgCount[HTMLCS.ERROR] = 0;
            msgCount[HTMLCS.WARNING] = 0;
            msgCount[HTMLCS.NOTICE] = 0;
            for (var i = 0; i < length; i++) {
                self.output(messages[i]);
                msgCount[messages[i].type]++;
            }
            console.log("done");
        }, function() {
            console.log("Something in HTML_CodeSniffer failed to parse. Cannot run.");
            console.log("done");
        }, "en");
    };
    this.output = function(msg) {
        var typeName = "UNKNOWN";
        switch (msg.type) {
          case HTMLCS.ERROR:
            typeName = _global.HTMLCS.getTranslation("auditor_error");
            break;

          case HTMLCS.WARNING:
            typeName = _global.HTMLCS.getTranslation("auditor_warning");
            break;

          case HTMLCS.NOTICE:
            typeName = _global.HTMLCS.getTranslation("auditor_notice");
            break;
        }
        var nodeName = "";
        if (msg.element) {
            nodeName = msg.element.nodeName.toLowerCase();
        }
        var elementId = "";
        if (msg.element.id && msg.element.id !== "") {
            elementId = "#" + msg.element.id;
        }
        var html = "";
        if (msg.element.outerHTML) {
            var node = msg.element.cloneNode(true);
            node.innerHTML = "...";
            html = node.outerHTML;
        }
        console.log("[HTMLCS] " + typeName + "|" + msg.code + "|" + nodeName + "|" + elementId + "|" + msg.msg + "|" + html);
    };
}();

_global.HTMLCSAuditor = new function() {
    var _prefix = "HTMLCS-";
    var _screen = "";
    var _standard = "";
    var _sources = [];
    var _options = {};
    var _doc = null;
    var _top = null;
    var _messages = [];
    var _page = 1;
    var _sbWidth = null;
    var self = this;
    this.pointerContainer = null;
    var buildSummaryButton = function(id, className, title, onclick) {
        var button = _doc.createElement("div");
        button.id = id;
        button.className = _prefix + "button";
        button.setAttribute("title", title);
        var buttonInner = _doc.createElement("span");
        buttonInner.className = _prefix + "button-icon " + _prefix + "button-" + className;
        button.appendChild(buttonInner);
        var nbsp = _doc.createTextNode(String.fromCharCode(160));
        button.appendChild(nbsp);
        if (onclick instanceof Function === true) {
            button.onclick = function() {
                if (/disabled/.test(button.className) === false) {
                    onclick(button);
                }
            };
        }
        return button;
    };
    var buildCheckbox = function(id, title, checked, disabled, onclick) {
        if (checked === undefined) {
            checked = false;
        }
        var label = _doc.createElement("label");
        var content = "";
        label.className = _prefix + "checkbox";
        content += '<span class="' + _prefix + 'checkbox-switch">';
        content += '<span class="' + _prefix + 'checkbox-slider"></span>';
        content += '<input id="' + id + '" type="checkbox"';
        if (checked === true) {
            content += ' checked="checked"';
            label.className += " active";
        }
        if (disabled === true) {
            content += ' disabled="disabled"';
            label.className += " disabled";
        }
        content += ' title="' + title + '" /></span>';
        label.innerHTML = content;
        var input = label.getElementsByTagName("input")[0];
        label.onclick = function(event) {
            if (disabled === false) {
                input.checked = !input.checked;
                if (input.checked === true) {
                    label.className += " active";
                } else {
                    label.className = label.className.replace("active", "");
                }
                if (onclick instanceof Function === true) {
                    onclick(input);
                }
            }
            return false;
        };
        return label;
    };
    var buildRadioButton = function(groupName, value, title, checked) {
        if (checked === undefined) {
            checked = false;
        }
        var label = _doc.createElement("label");
        label.className = _prefix + "radio";
        var content = '<span class="' + _prefix + 'radio-title">' + title + "</span>";
        content += '<span class="' + _prefix + 'radio-switch">';
        content += '<span class="' + _prefix + 'radio-slider"></span>';
        content += '<input type="radio" name="' + _prefix + groupName + '" ';
        content += 'class="' + _prefix + 'radiobtn"';
        content += 'value="' + value + '"';
        if (checked === true) {
            content += ' checked="true"';
        }
        content += " /></span>";
        label.innerHTML = content;
        return label;
    };
    var buildHeaderSection = function(standard, wrapper) {
        var header = _doc.createElement("div");
        header.className = _prefix + "header";
        header.innerHTML = "HTML_CodeSniffer by Squiz";
        header.setAttribute("title", _global.HTMLCS.getTranslation("auditor_using_standard") + standard);
        var dragging = false;
        var prevX = 0;
        var prevY = 0;
        var mouseX = 0;
        var mouseY = 0;
        header.onmousedown = function(e) {
            e = e || window.event;
            dragging = true;
            mouseX = e.clientX;
            mouseY = e.clientY;
            return false;
        };
        _doc.onmousemove = function(e) {
            e = e || window.event;
            if (dragging === true) {
                var top = wrapper.offsetTop;
                var left = wrapper.offsetLeft;
                if (mouseY < e.clientY) {
                    top += e.clientY - mouseY;
                    wrapper.style.top = top + "px";
                } else if (mouseY > e.clientY) {
                    top -= mouseY - e.clientY;
                    wrapper.style.top = top + "px";
                }
                if (mouseX < e.clientX) {
                    left += e.clientX - mouseX;
                    wrapper.style.left = left + "px";
                } else if (mouseX > e.clientX) {
                    left -= mouseX - e.clientX;
                    wrapper.style.left = left + "px";
                }
                mouseX = e.clientX;
                mouseY = e.clientY;
            }
        };
        _doc.onmouseup = function(e) {
            var maxHeight = window.innerHeight - wrapper.offsetHeight;
            if (mouseY > maxHeight) {
                wrapper.style.top = maxHeight + "px";
            } else if (mouseY < 0) {
                wrapper.style.top = 0 + "px";
            }
            dragging = false;
        };
        var closeIcon = _doc.createElement("div");
        closeIcon.className = _prefix + "close";
        closeIcon.setAttribute("title", _global.HTMLCS.getTranslation("auditor_close"));
        closeIcon.onmousedown = function() {
            self.close.call(self);
        };
        header.appendChild(closeIcon);
        return header;
    };
    var buildSummarySection = function(errors, warnings, notices) {
        var summary = _doc.createElement("div");
        summary.className = _prefix + "summary";
        var leftPane = _doc.createElement("div");
        leftPane.className = _prefix + "summary-left";
        summary.appendChild(leftPane);
        var rightPane = _doc.createElement("div");
        rightPane.className = _prefix + "summary-right";
        summary.appendChild(rightPane);
        var leftContents = [];
        var divider = ', &#160;<span class="' + _prefix + 'divider"></span>';
        if (errors > 0) {
            var typeName = _global.HTMLCS.getTranslation("auditor_errors");
            if (errors === 1) {
                typeName = _global.HTMLCS.getTranslation("auditor_error");
            }
            leftContents.push("<strong>" + errors + "</strong> " + typeName);
        }
        if (warnings > 0) {
            var typeName = _global.HTMLCS.getTranslation("auditor_warnings");
            if (warnings === 1) {
                typeName = _global.HTMLCS.getTranslation("auditor_warning");
            }
            leftContents.push("<strong>" + warnings + "</strong> " + typeName);
        }
        if (notices > 0) {
            var typeName = _global.HTMLCS.getTranslation("auditor_notices");
            if (notices === 1) {
                typeName = _global.HTMLCS.getTranslation("auditor_notice");
            }
            leftContents.push("<strong>" + notices + "</strong> " + typeName);
        }
        var lineage = _doc.createElement("ol");
        lineage.className = _prefix + "lineage";
        var lineageHomeItem = _doc.createElement("li");
        lineageHomeItem.className = _prefix + "lineage-item";
        var lineageHomeLink = _doc.createElement("a");
        lineageHomeLink.className = _prefix + "lineage-link";
        lineageHomeLink.href = "javascript:";
        var lineageHomeSpan = _doc.createElement("span");
        lineageHomeSpan.innerHTML = "Home";
        lineageHomeLink.appendChild(lineageHomeSpan);
        lineageHomeLink.onmousedown = function() {
            self.run(_standard, _sources, _options);
        };
        var lineageTotalsItem = _doc.createElement("li");
        lineageTotalsItem.className = _prefix + "lineage-item";
        lineageTotalsItem.innerHTML = leftContents.join(divider);
        lineageHomeItem.appendChild(lineageHomeLink);
        lineage.appendChild(lineageHomeItem);
        lineage.appendChild(lineageTotalsItem);
        leftPane.appendChild(lineage);
        rightPane.appendChild(_doc.createTextNode(String.fromCharCode(160)));
        return summary;
    };
    var buildDetailSummarySection = function(issue, totalIssues) {
        var summary = _doc.createElement("div");
        summary.className = _prefix + "summary-detail";
        var leftPane = _doc.createElement("div");
        leftPane.className = _prefix + "summary-left";
        var rightPane = _doc.createElement("div");
        rightPane.className = _prefix + "summary-right";
        var lineage = _doc.createElement("ol");
        lineage.className = _prefix + "lineage";
        var lineageHomeItem = _doc.createElement("li");
        lineageHomeItem.className = _prefix + "lineage-item";
        var lineageHomeLink = _doc.createElement("a");
        lineageHomeLink.className = _prefix + "lineage-link";
        lineageHomeLink.href = "javascript:";
        var lineageHomeSpan = _doc.createElement("span");
        lineageHomeSpan.innerHTML = _global.HTMLCS.getTranslation("auditor_home");
        lineageHomeLink.appendChild(lineageHomeSpan);
        lineageHomeLink.onmousedown = function() {
            self.run(_standard, _sources, _options);
        };
        var lineageReportItem = _doc.createElement("li");
        lineageReportItem.className = _prefix + "lineage-item";
        var lineageReportLink = _doc.createElement("a");
        lineageReportLink.className = _prefix + "lineage-link";
        lineageReportLink.href = "javascript:";
        lineageReportLink.innerHTML = _global.HTMLCS.getTranslation("auditor_report");
        lineageReportLink.setAttribute("title", _global.HTMLCS.getTranslation("auditor_back_to_report"));
        lineageReportLink.onmousedown = function() {
            var list = _doc.querySelectorAll(".HTMLCS-inner-wrapper")[0];
            list.style.marginLeft = "0px";
            list.style.maxHeight = null;
            summary.style.display = "none";
            var listSummary = _doc.querySelectorAll(".HTMLCS-summary")[0];
            listSummary.style.display = "block";
        };
        var lineageTotalsItem = _doc.createElement("li");
        lineageTotalsItem.className = _prefix + "lineage-item";
        lineageTotalsItem.innerHTML = _global.HTMLCS.getTranslation("auditor_issue") + " " + issue + " " + _global.HTMLCS.getTranslation("auditor_of") + " " + totalIssues;
        lineageHomeItem.appendChild(lineageHomeLink);
        lineageReportItem.appendChild(lineageReportLink);
        lineage.appendChild(lineageHomeItem);
        lineage.appendChild(lineageReportItem);
        lineage.appendChild(lineageTotalsItem);
        leftPane.appendChild(lineage);
        var buttonGroup = _doc.createElement("div");
        buttonGroup.className = _prefix + "button-group";
        var prevButton = buildSummaryButton(_prefix + "button-previous-issue", "previous", _global.HTMLCS.getTranslation("auditor_previous_issue"), function(target) {
            var newIssue = Number(issue) - 1;
            if (newIssue >= 1) {
                setCurrentDetailIssue(newIssue - 1);
                wrapper = summary.parentNode;
                var newSummary = buildDetailSummarySection(newIssue, totalIssues);
                wrapper.replaceChild(newSummary, summary);
                newSummary.style.display = "block";
                var issueList = _doc.querySelectorAll(".HTMLCS-issue-detail-list")[0];
                issueList.firstChild.style.marginLeft = parseInt(issueList.firstChild.style.marginLeft, 10) + 300 + "px";
                pointToIssueElement(newIssue - 1);
            }
        });
        var nextButton = buildSummaryButton(_prefix + "button-next-issue", "next", _global.HTMLCS.getTranslation("auditor_next_issue"), function(target) {
            var newIssue = Number(issue) + 1;
            if (newIssue <= _messages.length) {
                setCurrentDetailIssue(newIssue - 1);
                wrapper = summary.parentNode;
                var newSummary = buildDetailSummarySection(newIssue, totalIssues);
                wrapper.replaceChild(newSummary, summary);
                newSummary.style.display = "block";
                var issueList = _doc.querySelectorAll(".HTMLCS-issue-detail-list")[0];
                issueList.firstChild.style.marginLeft = parseInt(issueList.firstChild.style.marginLeft, 10) - 300 + "px";
                pointToIssueElement(newIssue - 1);
            }
        });
        if (issue === 1) {
            prevButton.className += " disabled";
        }
        if (issue === totalIssues) {
            nextButton.className += " disabled";
        }
        buttonGroup.appendChild(prevButton);
        buttonGroup.appendChild(nextButton);
        rightPane.appendChild(buttonGroup);
        summary.appendChild(leftPane);
        summary.appendChild(rightPane);
        return summary;
    };
    var buildIssueListSection = function(messages) {
        var issueListWidth = Math.ceil(messages.length / 5) * 300;
        var issueList = _doc.createElement("div");
        issueList.id = _prefix + "issues";
        issueList.className = _prefix + "details";
        issueList.setAttribute("style", "width: " + issueListWidth + "px");
        var listSection = _doc.createElement("ol");
        listSection.className = _prefix + "issue-list";
        listSection.setAttribute("style", "margin-left: 0");
        for (var i = 0; i < messages.length; i++) {
            if (i > 0 && i % 5 === 0) {
                issueList.appendChild(listSection);
                var listSection = _doc.createElement("ol");
                listSection.className = _prefix + "issue-list";
            }
            var msg = buildMessageSummary(i, messages[i]);
            listSection.appendChild(msg);
        }
        issueList.appendChild(listSection);
        return issueList;
    };
    var buildIssueDetailSection = function(messages) {
        var issueListWidth = messages.length * 300;
        var issueList = _doc.createElement("div");
        issueList.id = _prefix + "issues-detail";
        issueList.className = _prefix + "details";
        issueList.setAttribute("style", "width: " + issueListWidth + "px");
        var listSection = _doc.createElement("ol");
        listSection.className = _prefix + "issue-detail-list";
        listSection.setAttribute("style", "margin-left: 0");
        for (var i = 0; i < messages.length; i++) {
            var msg = buildMessageDetail(i, messages[i]);
            listSection.appendChild(msg);
        }
        issueList.appendChild(listSection);
        return issueList;
    };
    var buildSettingsSection = function() {
        var settingsDiv = _doc.createElement("div");
        settingsDiv.className = _prefix + "settings";
        var useStandardDiv = _doc.createElement("div");
        useStandardDiv.id = _prefix + "settings-use-standard";
        var useStandardLabel = _doc.createElement("label");
        useStandardLabel.innerHTML = _global.HTMLCS.getTranslation("auditor_standards") + ":";
        useStandardLabel.setAttribute("for", _prefix + "settings-use-standard-select");
        var useStandardSelect = _doc.createElement("select");
        useStandardSelect.id = _prefix + "settings-use-standard-select";
        useStandardSelect.innerHTML = "";
        var standards = HTMLCSAuditor.getStandardList();
        for (var i = 0; i < standards.length; i++) {
            var standard = standards[i];
            var option = _doc.createElement("option");
            option.value = standard;
            option.innerHTML = _global["HTMLCS_" + standard].name;
            if (standard === _standard) {
                option.selected = true;
            }
            useStandardSelect.appendChild(option);
            useStandardSelect.onchange = function() {
                _standard = this.options[this.selectedIndex].value;
                self.run(_standard, _sources, _options);
            };
        }
        var issueCountDiv = _doc.createElement("div");
        issueCountDiv.id = _prefix + "settings-issue-count";
        var issueCountHelpDiv = _doc.createElement("div");
        issueCountHelpDiv.id = _prefix + "settings-issue-count-help";
        issueCountHelpDiv.innerHTML = _global.HTMLCS.getTranslation("auditor_select_types");
        var viewReportDiv = _doc.createElement("div");
        viewReportDiv.id = _prefix + "settings-view-report";
        viewReportDiv.innerHTML = _global.HTMLCS.getTranslation("auditor_view_report");
        viewReportDiv.onclick = function() {
            if (/disabled/.test(this.className) === false) {
                _options.show = {
                    error: _doc.getElementById(_prefix + "include-error").checked,
                    warning: _doc.getElementById(_prefix + "include-warning").checked,
                    notice: _doc.getElementById(_prefix + "include-notice").checked
                };
                var wrapper = _doc.getElementById(_prefix + "wrapper");
                var newWrapper = self.build(_standard, _messages, _options);
                if (_options.parentElement) {
                    _options.parentElement.replaceChild(newWrapper, wrapper);
                } else {
                    newWrapper.style.left = wrapper.style.left;
                    newWrapper.style.top = wrapper.style.top;
                    _doc.body.replaceChild(newWrapper, wrapper);
                }
                if (_options.listUpdateCallback) {
                    _options.listUpdateCallback.call(this, _messages);
                }
            }
        };
        var wrapper = _doc.getElementById(_prefix + "wrapper");
        var levels = self.countIssues(_messages);
        if (_options.show === undefined && _messages.length > 0) {
            _options.show = {
                error: true,
                warning: true,
                notice: false
            };
            if (levels.error === 0 && levels.warning === 0) {
                _options.show.notice = true;
            }
        }
        for (var level in levels) {
            var msgCount = levels[level];
            var levelDiv = _doc.createElement("div");
            levelDiv.className = _prefix + "issue-tile " + _prefix + level.toLowerCase();
            var levelName = null;
            var levelCountDiv = _doc.createElement("div");
            levelCountDiv.className = "HTMLCS-tile-text";
            if (level == "error") {
                levelName = _global.HTMLCS.getTranslation("auditor_error");
                if (msgCount !== 1) {
                    levelName = _global.HTMLCS.getTranslation("auditor_errors");
                }
            }
            if (level == "warning") {
                levelName = _global.HTMLCS.getTranslation("auditor_warning");
                if (msgCount !== 1) {
                    levelName = _global.HTMLCS.getTranslation("auditor_warnings");
                }
            }
            if (level == "notice") {
                levelName = _global.HTMLCS.getTranslation("auditor_notice");
                if (msgCount !== 1) {
                    levelName = _global.HTMLCS.getTranslation("auditor_notices");
                }
            }
            var content = "<strong>" + msgCount + "</strong> " + levelName;
            levelCountDiv.innerHTML = content;
            if (_options.show === undefined) {
                var checked = false;
                var disabled = true;
            } else {
                var checked = _options.show[level];
                var disabled = false;
                if (msgCount === 0) {
                    checked = false;
                    disabled = true;
                }
            }
            var levelSwitch = buildCheckbox(_prefix + "include-" + level, "Toggle display of " + level + " messages", checked, disabled, function(input) {
                var enable = false;
                if (_doc.getElementById(_prefix + "include-error").disabled === false) {
                    _options.show.error = _doc.getElementById(_prefix + "include-error").checked;
                    enable = enable || _options.show.error;
                }
                if (_doc.getElementById(_prefix + "include-warning").disabled === false) {
                    _options.show.warning = _doc.getElementById(_prefix + "include-warning").checked;
                    enable = enable || _options.show.warning;
                }
                if (_doc.getElementById(_prefix + "include-notice").disabled === false) {
                    _options.show.notice = _doc.getElementById(_prefix + "include-notice").checked;
                    enable = enable || _options.show.notice;
                }
                if (enable === true) {
                    viewReportDiv.className = viewReportDiv.className.replace(/ disabled/g, "");
                } else {
                    viewReportDiv.className += " disabled";
                }
            });
            levelDiv.appendChild(levelCountDiv);
            levelDiv.appendChild(levelSwitch);
            issueCountDiv.appendChild(levelDiv);
        }
        if (_options.show !== undefined) {
            var enable = _options.show.error || _options.show.warning || _options.show.notice;
            if (enable === false) {
                viewReportDiv.className += " disabled";
            }
        } else {
            viewReportDiv.className += " disabled";
        }
        useStandardDiv.appendChild(useStandardLabel);
        useStandardDiv.appendChild(useStandardSelect);
        settingsDiv.appendChild(useStandardDiv);
        settingsDiv.appendChild(issueCountDiv);
        settingsDiv.appendChild(issueCountHelpDiv);
        settingsDiv.appendChild(viewReportDiv);
        return settingsDiv;
    };
    var buildMessageSummary = function(id, message) {
        var msg = "";
        var typeText = "";
        var typeClass = "";
        switch (message.type) {
          case HTMLCS.ERROR:
            typeText = "Error";
            break;

          case HTMLCS.WARNING:
            typeText = "Warning";
            break;

          case HTMLCS.NOTICE:
            typeText = "Notice";
            break;

          default:
            break;
        }
        var typeClass = typeText.toLowerCase();
        var messageMsg = message.msg;
        if (messageMsg.length > 115) {
            messageMsg = messageMsg.substr(0, 115) + "...";
        }
        var msg = _doc.createElement("li");
        msg.id = _prefix + "msg-" + id;
        var typeIcon = _doc.createElement("span");
        typeIcon.className = _prefix + "issue-type " + _prefix + typeClass;
        typeIcon.setAttribute("title", typeText);
        msg.appendChild(typeIcon);
        var msgTitle = _doc.createElement("span");
        msgTitle.className = _prefix + "issue-title";
        msgTitle.innerHTML = messageMsg;
        msg.appendChild(msgTitle);
        msg.onclick = function() {
            var id = this.id.replace(new RegExp(_prefix + "msg-"), "");
            setCurrentDetailIssue(id);
            var detailList = _doc.querySelectorAll(".HTMLCS-issue-detail-list")[0];
            detailList.className += " " + _prefix + "transition-disabled";
            detailList.firstChild.style.marginLeft = id * -300 + "px";
            pointToIssueElement(id);
            setTimeout(function() {
                detailList.className = detailList.className.replace(new RegExp(" " + _prefix + "transition-disabled"), "");
            }, 500);
            var list = _doc.querySelectorAll(".HTMLCS-inner-wrapper")[0];
            list.style.marginLeft = "-300px";
            list.style.maxHeight = "15em";
            summary = _doc.querySelectorAll(".HTMLCS-summary-detail")[0];
            var newSummary = buildDetailSummarySection(parseInt(id) + 1, _messages.length);
            summary.parentNode.replaceChild(newSummary, summary);
            newSummary.style.display = "block";
            var oldSummary = _doc.querySelectorAll(".HTMLCS-summary")[0];
            oldSummary.style.display = "none";
        };
        return msg;
    };
    var setCurrentDetailIssue = function(id) {
        var detailList = _doc.querySelectorAll(".HTMLCS-issue-detail-list")[0];
        var items = detailList.getElementsByTagName("li");
        for (var i = 0; i < items.length; i++) {
            items[i].className = items[i].className.replace(new RegExp(" " + _prefix + "current"), "");
        }
        var currentItem = _doc.getElementById("HTMLCS-msg-detail-" + id);
        currentItem.className += " " + _prefix + "current";
        if (_options.showIssueCallback) {
            _options.showIssueCallback.call(this, id);
        }
    };
    var buildMessageDetail = function(id, message, standard) {
        if (standard === undefined) {
            standard = _standard;
        }
        var typeText = "";
        switch (message.type) {
          case HTMLCS.ERROR:
            typeText = "Error";
            break;

          case HTMLCS.WARNING:
            typeText = "Warning";
            break;

          case HTMLCS.NOTICE:
            typeText = "Notice";
            break;

          default:
            break;
        }
        var typeClass = _prefix + typeText.toLowerCase();
        var standardObj = HTMLCS.util.getElementWindow(_doc)["HTMLCS_" + standard];
        var standardObj = _top["HTMLCS_" + standard];
        var msgInfo = [];
        if (standardObj.getMsgInfo) {
            msgInfo = standardObj.getMsgInfo(message.code);
        }
        var msgDiv = _doc.createElement("li");
        msgDiv.id = _prefix + "msg-detail-" + id;
        var msgDetailsDiv = _doc.createElement("div");
        msgDetailsDiv.className = _prefix + "issue-details";
        var msgType = _doc.createElement("span");
        msgType.className = _prefix + "issue-type " + typeClass;
        msgType.setAttribute("title", typeText);
        var msgTitle = _doc.createElement("div");
        msgTitle.className = _prefix + "issue-title";
        msgTitle.innerHTML = message.msg;
        var msgRef = _doc.createElement("div");
        msgRef.className = _prefix + "issue-wcag-ref";
        var refContent = "";
        for (var i = 0; i < msgInfo.length; i++) {
            refContent += "<em>" + msgInfo[i][0] + ":</em> " + msgInfo[i][1] + "<br/>";
        }
        msgRef.innerHTML = refContent;
        msgDetailsDiv.appendChild(msgType);
        msgDetailsDiv.appendChild(msgTitle);
        msgDetailsDiv.appendChild(msgRef);
        msgDiv.appendChild(msgDetailsDiv);
        if (pointer.isPointable(message.element) === false) {
            var msgElementSource = _doc.createElement("div");
            msgElementSource.className = _prefix + "issue-source";
            msgDiv.appendChild(msgElementSource);
            var msgElementSourceInner = _doc.createElement("div");
            msgElementSourceInner.className = _prefix + "issue-source-inner-u2p";
            var msg = _global.HTMLCS.getTranslation("auditor_unable_to_point");
            if (message.element.nodeName === "#document") {
                msg = _global.HTMLCS.getTranslation("auditor_applies_entire_document");
            } else if (message.element.ownerDocument === null) {
                msg = _global.HTMLCS.getTranslation("auditor_unable_to_point_removed");
            } else {
                var body = message.element.ownerDocument.getElementsByTagName("body")[0];
                if (HTMLCS.util.isInDocument(message.element) === false) {
                    msg += _global.HTMLCS.getTranslation("auditor_unable_to_point_entire");
                } else if (HTMLCS.util.contains(body, message.element) === false) {
                    msg = _global.HTMLCS.getTranslation("auditor_unable_to_point_outside");
                } else {
                    msg += " " + _global.HTMLCS.getTranslation("auditor_unable_to_point_outside");
                }
            }
            if (msgElementSourceInner.textContent !== undefined) {
                msgElementSourceInner.textContent = msg;
            } else {
                msgElementSourceInner.innerText = msg;
            }
            msgElementSource.appendChild(msgElementSourceInner);
        }
        if (_options.customIssueSource) {
            var msgElementSource = _doc.createElement("div");
            msgElementSource.className = _prefix + "issue-source";
            msgDiv.appendChild(msgElementSource);
            _options.customIssueSource.call(this, id, message, standard, msgElementSource, msgDetailsDiv);
        } else {
            var msgElementSource = _doc.createElement("div");
            msgElementSource.className = _prefix + "issue-source";
            var msgElementSourceHeader = _doc.createElement("div");
            msgElementSourceHeader.className = _prefix + "issue-source-header";
            var msgSourceHeaderText = _doc.createElement("strong");
            msgSourceHeaderText.innerHTML = _global.HTMLCS.getTranslation("auditor_code_snippet");
            var btnPointTo = buildSummaryButton(_prefix + "button-point-to-element-" + id, "pointer", _global.HTMLCS.getTranslation("auditor_point_to_element"), function() {
                self.pointToElement(message.element);
            });
            msgElementSourceHeader.appendChild(msgSourceHeaderText);
            msgElementSourceHeader.appendChild(btnPointTo);
            msgElementSource.appendChild(msgElementSourceHeader);
            if (message.element.outerHTML) {
                var preText = "";
                var postText = "";
                if (message.element.innerHTML.length > 31) {
                    var outerHTML = message.element.outerHTML.replace(message.element.innerHTML, message.element.innerHTML.substr(0, 31) + "...");
                } else {
                    var outerHTML = message.element.outerHTML;
                }
                var preNode = message.element.previousSibling;
                while (preText.length <= 31) {
                    if (preNode === null) {
                        break;
                    } else {
                        if (preNode.nodeType === 1) {
                            preText = preNode.outerHTML;
                        } else if (preNode.nodeType === 3) {
                            if (preNode.textContent !== undefined) {
                                preText = preNode.textContent + preText;
                            } else {
                                preText = preNode.nodeValue + preText;
                            }
                        }
                        if (preText.length > 31) {
                            preText = "..." + preText.substr(preText.length - 31);
                        }
                    }
                    preNode = preNode.previousSibling;
                }
                var postNode = message.element.nextSibling;
                while (postText.length <= 31) {
                    if (postNode === null) {
                        break;
                    } else {
                        if (postNode.nodeType === 1) {
                            postText += postNode.outerHTML;
                        } else if (postNode.nodeType === 3) {
                            if (postNode.textContent !== undefined) {
                                postText += postNode.textContent;
                            } else {
                                postText += postNode.nodeValue;
                            }
                        }
                        if (postText.length > 31) {
                            postText = postText.substr(0, 31) + "...";
                        }
                    }
                    postNode = postNode.nextSibling;
                }
                var msgElementSourceInner = _doc.createElement("div");
                msgElementSourceInner.className = _prefix + "issue-source-inner";
                var msgElementSourceMain = _doc.createElement("strong");
                if (msgElementSourceMain.textContent !== undefined) {
                    msgElementSourceMain.textContent = outerHTML;
                } else {
                    msgElementSourceMain.innerText = outerHTML;
                }
                msgElementSourceInner.appendChild(_doc.createTextNode(preText));
                msgElementSourceInner.appendChild(msgElementSourceMain);
                msgElementSourceInner.appendChild(_doc.createTextNode(postText));
                msgElementSource.appendChild(msgElementSourceInner);
            } else if (message.element.nodeName === "#document") {} else {
                var msgElementSourceInner = _doc.createElement("div");
                msgElementSourceInner.className = _prefix + "issue-source-not-supported";
                var nsText = _global.HTMLCS.getTranslation("auditor_unsupported_browser");
                msgElementSourceInner.appendChild(_doc.createTextNode(nsText));
                msgElementSource.appendChild(msgElementSourceInner);
            }
            msgDiv.appendChild(msgElementSource);
        }
        return msgDiv;
    };
    var buildNavigation = function(page, totalPages) {
        var navDiv = _doc.createElement("div");
        navDiv.className = _prefix + "navigation";
        var prev = _doc.createElement("span");
        prev.className = _prefix + "nav-button " + _prefix + "previous";
        prev.innerHTML = String.fromCharCode(160);
        if (page === 1) {
            prev.className += " " + _prefix + "disabled";
        }
        navDiv.appendChild(prev);
        var pageNum = _doc.createElement("span");
        pageNum.className = _prefix + "page-number";
        pageNum.innerHTML = _global.HTMLCS.getTranslation("auditor_page") + " " + page + " " + _global.HTMLCS.getTranslation("auditor_of") + " " + totalPages;
        navDiv.appendChild(pageNum);
        var next = _doc.createElement("span");
        next.className = _prefix + "nav-button " + _prefix + "next";
        next.innerHTML = String.fromCharCode(160);
        if (page === totalPages) {
            next.className += " " + _prefix + "disabled";
        }
        navDiv.appendChild(next);
        prev.onclick = function() {
            if (_page > 1) {
                _page--;
                if (_page === 1) {
                    prev.className += " " + _prefix + "disabled";
                }
            }
            if (totalPages > 1) {
                next.className = next.className.replace(new RegExp(" " + _prefix + "disabled"), "");
            }
            pageNum.innerHTML = "";
            pageNum.appendChild(document.createTextNode(_global.HTMLCS.getTranslation("auditor_page") + " " + _page + " " + _global.HTMLCS.getTranslation("auditor_of") + " " + totalPages));
            var issueList = _doc.querySelectorAll(".HTMLCS-issue-list")[0];
            issueList.style.marginLeft = (_page - 1) * -300 + "px";
        };
        next.onclick = function() {
            if (_page < totalPages) {
                _page++;
                if (_page === totalPages) {
                    next.className += " " + _prefix + "disabled";
                }
            }
            if (totalPages > 1) {
                prev.className = prev.className.replace(new RegExp(" " + _prefix + "disabled"), "");
            }
            pageNum.innerHTML = "";
            pageNum.appendChild(document.createTextNode(_global.HTMLCS.getTranslation("auditor_page") + " " + _page + " " + _global.HTMLCS.getTranslation("auditor_of") + " " + totalPages));
            var issueList = _doc.querySelectorAll(".HTMLCS-issue-list")[0];
            issueList.style.marginLeft = (_page - 1) * -300 + "px";
        };
        return navDiv;
    };
    var pointToIssueElement = function(issue) {
        var msg = _messages[Number(issue)];
        if (!msg.element) {
            return;
        }
        var btnPointTo = _doc.getElementById(_prefix + "button-point-to-element-" + issue);
        pointer.container = self.pointerContainer || _doc.getElementById("HTMLCS-wrapper");
        if (pointer.isPointable(msg.element) === false) {
            var myPointer = pointer.getPointer(msg.element);
            if (pointer.pointer) {
                myPointer.className += " HTMLCS-pointer-hidden";
            }
            if (btnPointTo) {
                btnPointTo.className += " disabled";
            }
        } else {
            if (btnPointTo) {
                btnPointTo.className = btnPointTo.className.replace(" disabled", "");
            }
            pointer.pointTo(msg.element);
        }
    };
    var loadStandards = function(standards, callback) {
        if (standards.length === 0) {
            callback.call(this);
            return;
        }
        var standard = standards.shift();
        HTMLCS.loadStandard(standard, function() {
            loadStandards(standards, callback);
        });
    };
    var _includeScript = function(src, callback) {
        var script = document.createElement("script");
        script.onload = function() {
            script.onload = null;
            script.onreadystatechange = null;
            if (callback instanceof Function === true) {
                callback.call(this);
            }
        };
        script.onreadystatechange = function() {
            if (/^(complete|loaded)$/.test(this.readyState) === true) {
                script.onreadystatechange = null;
                script.onload();
            }
        };
        script.src = src;
        if (document.head) {
            document.head.appendChild(script);
        } else {
            document.getElementsByTagName("head")[0].appendChild(script);
        }
    };
    this.setOption = function(name, value) {
        _options[name] = value;
    };
    this.getIssue = function(issueNumber) {
        return _messages[issueNumber];
    };
    this.countIssues = function(messages) {
        var counts = {
            error: 0,
            warning: 0,
            notice: 0
        };
        for (var i = 0; i < messages.length; i++) {
            switch (messages[i].type) {
              case HTMLCS.ERROR:
                counts.error++;
                break;

              case HTMLCS.WARNING:
                counts.warning++;
                break;

              case HTMLCS.NOTICE:
                counts.notice++;
                break;
            }
        }
        return counts;
    };
    this.build = function(standard, messages, options) {
        var wrapper = null;
        if (_doc) {
            var wrapper = _doc.getElementById(_prefix + "wrapper");
        }
        var errors = 0;
        var warnings = 0;
        var notices = 0;
        for (var i = 0; i < messages.length; i++) {
            var ignore = false;
            switch (messages[i].type) {
              case HTMLCS.ERROR:
                if (_options.show.error === false) {
                    ignore = true;
                } else {
                    errors++;
                }
                break;

              case HTMLCS.WARNING:
                if (_options.show.warning === false) {
                    ignore = true;
                } else {
                    warnings++;
                }
                break;

              case HTMLCS.NOTICE:
                if (_options.show.notice === false) {
                    ignore = true;
                } else {
                    notices++;
                }
                break;
            }
            if (ignore === true) {
                messages.splice(i, 1);
                i--;
            }
        }
        _messages = messages;
        var settingsContents = "";
        var summaryContents = "";
        var detailContents = "";
        for (var i = 0; i < messages.length; i++) {
            if (i % 5 === 0) {
                summaryContents += '<ol class="HTMLCS-issue-list"';
                if (i === 0) {
                    summaryContents += 'style="margin-left: 0em"';
                }
                summaryContents += ">";
            }
            summaryContents += buildMessageSummary(i, messages[i]);
            if (i % 5 === 4 || i === messages.length - 1) {
                summaryContents += "</ol>";
            }
            detailContents += buildMessageDetail(i, messages[i], standard);
        }
        var detailWidth = i * 300;
        var wrapper = _doc.createElement("div");
        wrapper.id = _prefix + "wrapper";
        wrapper.className = "showing-issue-list";
        if (_options.noHeader !== true) {
            var header = buildHeaderSection(standard, wrapper);
            wrapper.appendChild(header);
        }
        var summary = buildSummarySection(errors, warnings, notices);
        var summaryDetail = buildDetailSummarySection(1, messages.length);
        var innerWrapper = _doc.createElement("div");
        innerWrapper.id = _prefix + "issues-wrapper";
        innerWrapper.className = _prefix + "inner-wrapper";
        var issueList = buildIssueListSection(messages);
        innerWrapper.appendChild(issueList);
        var totalPages = Math.ceil(messages.length / 5);
        var navDiv = buildNavigation(1, totalPages);
        innerWrapper.appendChild(navDiv);
        var outerWrapper = _doc.createElement("div");
        outerWrapper.className = _prefix + "outer-wrapper";
        outerWrapper.appendChild(innerWrapper);
        var innerWrapper = _doc.createElement("div");
        innerWrapper.id = _prefix + "issues-detail-wrapper";
        innerWrapper.className = _prefix + "inner-wrapper";
        var issueDetail = buildIssueDetailSection(messages);
        innerWrapper.appendChild(issueDetail);
        outerWrapper.appendChild(innerWrapper);
        wrapper.appendChild(summary);
        wrapper.appendChild(summaryDetail);
        wrapper.appendChild(outerWrapper);
        return wrapper;
    };
    this.buildSummaryPage = function() {
        var wrapper = _doc.createElement("div");
        wrapper.id = _prefix + "wrapper";
        wrapper.className = "showing-settings";
        if (_options.noHeader !== true) {
            var header = buildHeaderSection(_standard, wrapper);
            wrapper.appendChild(header);
        }
        var summary = buildSettingsSection();
        wrapper.appendChild(summary);
        return wrapper;
    };
    this.changeScreen = function(screen) {
        var wrapper = _doc.getElementById(_prefix + "wrapper");
        wrapper.className = wrapper.className.replace(new RegExp("showing-" + _screen), "");
        wrapper.className += " showing-" + screen;
        wrapper.className = wrapper.className.replace(/\s+/, " ");
        _screen = screen;
    };
    this.includeCss = function(prefix, doc) {
        if (_options.includeCss === false) {
            return;
        }
        if (doc === undefined) {
            doc = _doc;
        }
        var head = doc.querySelector("head");
        var exLinks = head.getElementsByTagName("link");
        var foundCss = false;
        for (var i = 0; i < exLinks.length; i++) {
            if (new RegExp(prefix + ".css").test(exLinks[i].getAttribute("href")) === true) {
                foundCss = true;
                break;
            }
        }
        if (foundCss === false) {
            var cssLink = doc.createElement("link");
            cssLink.rel = "stylesheet";
            cssLink.type = "text/css";
            cssLink.href = _options.path + prefix + ".css";
            head.appendChild(cssLink);
        }
    };
    this.getStandardList = function() {
        var pattern = /^HTMLCS_[^_]+$/;
        var standards = [];
        for (i in window) {
            if (pattern.test(i) === true) {
                var standard = window[i];
                if (standard.sniffs && standard.name) {
                    standards.push(i.substr(7));
                }
            }
        }
        return standards;
    };
    this.getParentElement = function() {
        var parentEl = null;
        if (_options.parentElement) {
            parentEl = _options.parentElement;
        } else if (_top.frames.length > 0) {
            var largestFrameSize = -1;
            var largestFrame = null;
            for (var i = 0; i < _top.frames.length; i++) {
                try {
                    if (window.frames[i].frameElement.nodeName.toLowerCase() === "frame") {
                        if (window.frames[i].document) {
                            var frameSize = window.frames[i].innerWidth * window.frames[i].innerHeight;
                            if (frameSize > largestFrameSize) {
                                largestFrameSize = frameSize;
                                largestFrame = window.frames[i].document.body;
                            }
                        }
                    }
                } catch (ex) {}
            }
            if (largestFrame === null) {
                parentEl = document.body;
            } else {
                parentEl = largestFrame;
            }
        } else {
            parentEl = document.body;
        }
        return parentEl;
    };
    this.getOwnerDocument = function() {
        var _doc = this.getParentElement();
        if (_doc.ownerDocument) {
            _doc = _doc.ownerDocument;
        }
        return _doc;
    };
    this.getDocumentLanguage = function() {
        var defaultLang = "en";
        var doc = this.getOwnerDocument();
        var html = doc.getElementsByTagName("html")[0];
        if (html) {
            var lang = html.getAttribute("lang");
            if (lang) {
                return lang;
            }
        }
        return defaultLang;
    };
    this.run = function(standard, source, options) {
        _top = window;
        var standards = this.getStandardList();
        var standardsToLoad = [];
        for (var i = 0; i < standards.length; i++) {
            if (!_global["HTMLCS_" + standards[i]]) {
                standardsToLoad.push(standards[i]);
            }
        }
        if (standardsToLoad.length > 0) {
            loadStandards(standardsToLoad, function() {
                self.run(standard, source, options);
            });
            return;
        }
        if (source === null || source === undefined) {
            source = [];
            if (document.querySelectorAll("frameset").length === 0) {
                source.push(document);
            }
            if (_top.frames.length > 0) {
                for (var i = 0; i < _top.frames.length; i++) {
                    try {
                        source.push(_top.frames[i].document);
                    } catch (ex) {}
                }
            }
        } else if (source.nodeName) {
            if (source.nodeName.toLowerCase() === "input") {
                if (source.hasAttribute("type") === false) {
                    source = source.value;
                } else {
                    var inputType = source.getAttribute("type").toLowerCase();
                    if (inputType === "text") {
                        source = source.value;
                    }
                }
            } else if (source.nodeName.toLowerCase() === "textarea") {
                source = source.value;
            }
        }
        if (source instanceof Array === false) {
            source = [ source ];
        }
        if (options === undefined) {
            options = {};
        }
        _standard = standard;
        _sources = source;
        _options = options;
        _page = 1;
        _screen = "";
        _messages = [];
        var parentEl = this.getParentElement();
        _doc = this.getOwnerDocument();
        if (!_options.path) {
            _options.path = "./";
        }
        if (!options.lang) {
            _options.lang = this.getDocumentLanguage();
        }
        if (_options.includeCss === undefined) {
            _options.includeCss = true;
        }
        if (_options.ignoreMsgCodes === undefined) {
            _options.ignoreMsgCodes = [];
        }
        this.includeCss("HTMLCS");
        var target = _doc.getElementById(_prefix + "wrapper");
        var newlyOpen = false;
        var wrapper = self.buildSummaryPage();
        wrapper.className += " HTMLCS-processing";
        if (target) {
            wrapper.style.left = target.style.left;
            wrapper.style.top = target.style.top;
            parentEl.replaceChild(wrapper, target);
        } else {
            if (_options.openCallback) {
                _options.openCallback.call(this);
            }
            newlyOpen = true;
            parentEl.appendChild(wrapper);
        }
        var _finalise = function() {
            for (var i = 0; i < _messages.length; i++) {
                var ignore = false;
                if (wrapper) {
                    if (wrapper === _messages[i].element) {
                        ignore = true;
                    } else if (_messages[i].element.documentElement) {
                        ignore = false;
                    } else if (wrapper.contains && wrapper.contains(_messages[i].element) === true) {
                        ignore = true;
                    } else if (wrapper.compareDocumentPosition && (wrapper.compareDocumentPosition(_messages[i].element) & 16) > 0) {
                        ignore = true;
                    }
                }
                for (var j = 0; j < options.ignoreMsgCodes.length; j++) {
                    if (new RegExp(options.ignoreMsgCodes[j]).test(_messages[i].code) === true) {
                        ignore = true;
                        break;
                    }
                }
                if (ignore === true) {
                    _messages.splice(i, 1);
                    i--;
                }
            }
            if (_options.runCallback) {
                var _newMsgs = _options.runCallback.call(this, _messages, newlyOpen);
                if (_newMsgs instanceof Array === true) {
                    _messages = _newMsgs;
                }
            }
            setTimeout(function() {
                var wrapper = _doc.getElementById(_prefix + "wrapper");
                var newWrapper = self.buildSummaryPage();
                newWrapper.style.left = wrapper.style.left;
                newWrapper.style.top = wrapper.style.top;
                parentEl.replaceChild(newWrapper, wrapper);
            }, 400);
        };
        var _processSource = function(standard, sources) {
            var source = sources.shift();
            while (!source) {
                if (sources.length === 0) {
                    _finalise();
                    return;
                } else {
                    source = sources.shift();
                }
            }
            HTMLCS.process(standard, source, function() {
                _messages = _messages.concat(HTMLCS.getMessages());
                if (sources.length === 0) {
                    _finalise();
                } else {
                    _processSource(standard, sources);
                }
            }, function() {}, options.lang);
        };
        _processSource(standard, _sources.concat([]));
    };
    this.versionCheck = function(response) {
        if (response && response.currentVersion !== null) {
            if (response.newVersion > response.currentVersion) {
                var msgElementSource = _doc.createElement("div");
                msgElementSource.id = _prefix + "settings-updated-notification";
                _doc.documentElement.querySelector(".HTMLCS-settings").appendChild(msgElementSource);
                var msg = "HTML_CodeSniffer has been updated to version " + response.newVersion + ".";
                msg += ' <a href="http://squizlabs.github.io/HTML_CodeSniffer/patches/' + response.newVersion + '">View the changelog</a>';
                msgElementSource.innerHTML = msg;
            }
        }
    };
    this.close = function() {
        if (_doc) {
            var wrapper = _doc.getElementById("HTMLCS-wrapper");
            if (wrapper) {
                var pointerEl = pointer.getPointer(wrapper);
                if (pointerEl && pointerEl.parentNode) {
                    pointerEl.parentNode.removeChild(pointerEl);
                }
                wrapper.parentNode.removeChild(wrapper);
                if (_options.closeCallback) {
                    _messages = _options.closeCallback.call(this);
                }
            }
        }
    };
    this.pointToElement = function(element) {
        pointer.container = self.pointerContainer || _doc.getElementById("HTMLCS-wrapper");
        pointer.pointTo(element);
    };
    this.getCurrentStandard = function() {
        return _standard;
    };
    var pointer = {
        pointerDim: {},
        container: null,
        getBoundingRectangle: function(element) {
            if (!element) {
                return null;
            }
            var coords = this.getElementCoords(element);
            var dimensions = this.getElementDimensions(element);
            var result = {
                x1: coords.x,
                y1: coords.y,
                x2: coords.x + dimensions.width,
                y2: coords.y + dimensions.height
            };
            return result;
        },
        getElementDimensions: function(element) {
            var result = {
                width: element.offsetWidth,
                height: element.offsetHeight
            };
            return result;
        },
        getElementCoords: function(element, absolute) {
            var left = 0;
            var top = 0;
            var window = HTMLCS.util.getElementWindow(element);
            if (absolute === true) {
                var topWin = window.top;
            } else {
                var topWin = window;
            }
            while (true) {
                do {
                    left += element.offsetLeft;
                    top += element.offsetTop;
                } while (element = element.offsetParent);
                if (window === topWin) {
                    break;
                } else {
                    element = window.frameElement;
                    window = window.parent;
                    if (element.nodeName.toLowerCase() === "frame") {
                        break;
                    }
                }
            }
            return {
                x: left,
                y: top
            };
        },
        getWindowDimensions: function(elem) {
            var window = HTMLCS.util.getElementWindow(elem);
            var doc = elem.ownerDocument;
            var windowWidth = 0;
            var windowHeight = 0;
            if (window.innerWidth) {
                windowWidth = window.innerWidth;
                windowHeight = window.innerHeight;
                var scrollWidth = this.getScrollbarWidth(elem);
                if (doc.documentElement.scrollHeight > windowHeight) {
                    if (typeof scrollWidth === "number") {
                        windowWidth -= scrollWidth;
                    }
                }
                if (doc.body.scrollWidth > windowWidth) {
                    if (typeof scrollWidth === "number") {
                        windowHeight -= scrollWidth;
                    }
                }
            } else if (doc.documentElement && (doc.documentElement.clientWidth || doc.documentElement.clientHeight)) {
                windowWidth = doc.documentElement.clientWidth;
                windowHeight = doc.documentElement.clientHeight;
            } else if (doc.body && (doc.body.clientWidth || doc.body.clientHeight)) {
                windowWidth = doc.body.clientWidth;
                windowHeight = doc.body.clientHeight;
            }
            var result = {
                width: windowWidth,
                height: windowHeight
            };
            return result;
        },
        getScrollbarWidth: function(elem) {
            if (_sbWidth !== null) {
                return _sbWidth;
            }
            doc = elem.ownerDocument;
            var wrapDiv = null;
            var childDiv = null;
            var widthNoScrollBar = 0;
            var widthWithScrollBar = 0;
            wrapDiv = doc.createElement("div");
            wrapDiv.style.position = "absolute";
            wrapDiv.style.top = "-1000px";
            wrapDiv.style.left = "-1000px";
            wrapDiv.style.width = "100px";
            wrapDiv.style.height = "50px";
            wrapDiv.style.overflow = "hidden";
            childDiv = doc.createElement("div");
            childDiv.style.width = "100%";
            childDiv.style.height = "200px";
            wrapDiv.appendChild(childDiv);
            _doc.body.appendChild(wrapDiv);
            widthNoScrollBar = childDiv.offsetWidth;
            wrapDiv.style.overflow = "auto";
            widthWithScrollBar = childDiv.offsetWidth;
            doc.body.removeChild(doc.body.lastChild);
            var scrollBarWidth = widthNoScrollBar - widthWithScrollBar;
            _sbWidth = scrollBarWidth;
            return scrollBarWidth;
        },
        getScrollCoords: function(elem) {
            var window = HTMLCS.util.getElementWindow(elem);
            doc = elem.ownerDocument;
            var scrollX = 0;
            var scrollY = 0;
            if (window.pageYOffset) {
                scrollX = window.pageXOffset;
                scrollY = window.pageYOffset;
            } else if (doc.body && (doc.body.scrollLeft || doc.body.scrollTop)) {
                scrollX = doc.body.scrollLeft;
                scrollY = doc.body.scrollTop;
            } else {
                scrollX = doc.documentElement.scrollLeft;
                scrollY = doc.documentElement.scrollTop;
            }
            var coords = {
                x: scrollX,
                y: scrollY
            };
            return coords;
        },
        isPointable: function(elem) {
            if (elem.ownerDocument === null) {
                return false;
            }
            var parent = elem.parentNode;
            while (parent && parent.ownerDocument) {
                parent = parent.parentNode;
            }
            if (parent === null) {
                return false;
            }
            if (HTMLCS.util.isVisuallyHidden(elem) === true) {
                return false;
            }
            if (this.getPointerDirection(elem) === null) {
                return false;
            }
            return true;
        },
        getPointerDirection: function(elem) {
            var direction = null;
            var rect = this.getBoundingRectangle(elem);
            var myPointer = this.getPointer(elem);
            var doc = elem.ownerDocument;
            myPointer.className = myPointer.className.replace("HTMLCS-pointer-hidden", "");
            myPointer.className += " HTMLCS-pointer-hidden-block";
            this.pointerDim.height = 62;
            this.pointerDim.width = 62;
            var bounceHeight = 20;
            var winDim = this.getWindowDimensions(elem);
            var window = HTMLCS.util.getElementWindow(elem);
            var scrollY = Math.max(0, Math.min(rect.y1 - 100, doc.documentElement.offsetHeight - winDim.height));
            if (rect.y1 - this.pointerDim.height - bounceHeight > scrollY) {
                direction = "down";
            } else if (rect.y2 + this.pointerDim.height < winDim.height - scrollY) {
                direction = "up";
            } else if (rect.x2 + this.pointerDim.width < winDim.width) {
                direction = "left";
            } else if (rect.x1 - this.pointerDim.width > 0) {
                direction = "right";
            }
            myPointer.className = myPointer.className.replace("HTMLCS-pointer-hidden-block", "");
            myPointer.className += " HTMLCS-pointer-hidden";
            return direction;
        },
        pointTo: function(elem) {
            if (elem.ownerDocument) {
                var doc = elem.ownerDocument;
            } else {
                var doc = elem;
            }
            var oldPointer = doc.getElementById("HTMLCS-pointer");
            if (oldPointer) {
                oldPointer.parentNode.removeChild(oldPointer);
            }
            if (this.isPointable(elem) === false) {
                return;
            }
            var topWin = HTMLCS.util.getElementWindow(elem).top;
            var winDim = this.getWindowDimensions(topWin.document.documentElement);
            var direction = this.getPointerDirection(elem);
            var myPointer = this.getPointer(elem);
            myPointer.className = myPointer.className.replace("HTMLCS-pointer-hidden-block", "");
            if (direction === null) {
                myPointer.className += " HTMLCS-pointer-hidden";
            } else {
                var isFixed = false;
                if (HTMLCS.util.style(elem).position === "fixed") {
                    var isFixed = true;
                }
                var parent = elem.parentNode;
                while (parent.ownerDocument) {
                    if (HTMLCS.util.style(parent).position === "fixed") {
                        isFixed = true;
                        break;
                    }
                    parent = parent.parentNode;
                }
                if (isFixed === true) {
                    myPointer.style.position = "fixed";
                } else {
                    myPointer.style.position = "absolute";
                    var rect = this.getElementCoords(elem, true);
                    var window = HTMLCS.util.getElementWindow(elem);
                    var targetY = Math.max(rect.y - 100, 0);
                    while (targetY >= 0) {
                        window.scrollTo(0, targetY);
                        var scrollCoords = this.getScrollCoords(window.document.documentElement);
                        targetY -= scrollCoords.y;
                        targetY = Math.max(targetY, 0);
                        if (window === topWin) {
                            break;
                        } else {
                            window = window.parent;
                        }
                    }
                }
                this.showPointer(elem, direction);
            }
        },
        getPointer: function(targetElement) {
            try {
                var doc = targetElement.ownerDocument;
                HTMLCSAuditor.includeCss("HTMLCS", doc);
                var c = "HTMLCS";
                var myPointer = doc.getElementById(c + "-pointer");
                if (!myPointer) {
                    myPointer = doc.createElement("div");
                    myPointer.id = c + "-pointer";
                    myPointer.className = c + "-pointer " + c + "-pointer-hidden";
                    doc.body.appendChild(myPointer);
                }
            } catch (ex) {}
            return myPointer;
        },
        showPointer: function(elem, direction) {
            var c = "HTMLCS";
            var myPointer = this.getPointer(elem);
            this._removeDirectionClasses(myPointer);
            myPointer.className += " " + c + "-pointer-" + direction;
            myPointer.className = myPointer.className.replace(c + "-pointer-hidden", "");
            var rect = this.getBoundingRectangle(elem);
            var top = 0;
            var left = 0;
            var bounceHeight = 20;
            switch (direction) {
              case "up":
                bounceHeight = -bounceHeight;
                top = rect.y2;
                if (rect.x2 - rect.x1 < 250) {
                    left = this.getRectMidPnt(rect) - this.pointerDim.width / 2;
                } else {
                    left = rect.x1;
                }
                break;

              case "down":
              default:
                top = rect.y1 - this.pointerDim.height;
                if (rect.x2 - rect.x1 < 250) {
                    left = this.getRectMidPnt(rect) - this.pointerDim.width / 2;
                } else {
                    left = rect.x1;
                }
                break;

              case "left":
                left = rect.x2;
                top = this.getRectMidPnt(rect, true) - this.pointerDim.height / 2;
                break;

              case "right":
                bounceHeight = -bounceHeight;
                left = rect.x1 - this.pointerDim.width;
                top = this.getRectMidPnt(rect, true) - this.pointerDim.height / 2;
                break;
            }
            var frameScroll = this.getScrollCoords(elem);
            myPointer.style.top = top + "px";
            myPointer.style.left = left + "px";
            var coords = this.getBoundingRectangle(this.container);
            rect = this.getBoundingRectangle(myPointer);
            var posOffset = 20;
            var newPos = null;
            var midX = rect.x1 + (rect.x2 - rect.x1) / 2;
            var midY = rect.y1 + (rect.y2 - rect.y1) / 2;
            if (HTMLCS.util.style(myPointer).position !== "fixed") {
                midY -= frameScroll.y;
            }
            if (coords.x1 <= midX && coords.x2 >= midX && coords.y1 <= midY && coords.y2 >= midY) {
                var self = this;
                this.container.className += " HTMLCS-translucent";
                setTimeout(function() {
                    self.container.className = self.container.className.replace("HTMLCS-translucent", "");
                }, 4e3);
            }
            this.bounce(myPointer, function() {
                setTimeout(function() {
                    if (myPointer.parentNode) {
                        myPointer.parentNode.removeChild(myPointer);
                    }
                }, 1500);
            }, direction);
        },
        bounce: function(myPointer, callback, direction) {
            var currentDirection = direction;
            var initialPos = 0;
            var style = "";
            var initalPosOffset = 0;
            var dist = 30;
            var maxBounce = 5;
            switch (direction) {
              case "up":
                currentDirection = direction + "-op";
                initalPosOffset = dist;

              case "down":
                style = "top";
                break;

              case "left":
                currentDirection = direction + "-op";
                initalPosOffset = dist;

              case "right":
                style = "left";
                break;
            }
            initialPos = Number(myPointer.style[style].replace("px", "")) + initalPosOffset;
            var currentPos = initialPos;
            var lowerLimit = initialPos - dist;
            var bounces = 0;
            var i = setInterval(function() {
                if (currentDirection === direction) {
                    currentPos--;
                    myPointer.style[style] = currentPos + "px";
                    if (currentPos < lowerLimit) {
                        currentDirection = direction + "-op";
                        if (bounces === maxBounce && initalPosOffset !== 0) {
                            clearInterval(i);
                            callback.call(this);
                            return;
                        }
                    }
                } else {
                    currentPos++;
                    myPointer.style[style] = currentPos + "px";
                    if (currentPos >= initialPos) {
                        currentDirection = direction;
                        bounces++;
                        if (bounces === maxBounce && initalPosOffset === 0) {
                            clearInterval(i);
                            callback.call(this);
                            return;
                        }
                    }
                }
            }, 10);
        },
        getRectMidPnt: function(rect, height) {
            var midPnt = 0;
            if (height === true) {
                midPnt = rect.y1 + (rect.y2 - rect.y1) / 2;
            } else {
                midPnt = rect.x1 + (rect.x2 - rect.x1) / 2;
            }
            return midPnt;
        },
        _removeDirectionClasses: function(myPointer) {
            var c = "HTMLCS";
            var d = [ "down", "up", "left", "right" ];
            var l = d.length;
            for (var i = 0; i < l; i++) {
                myPointer.className = myPointer.className.replace(c + "-pointer-" + d[i], "");
            }
        }
    };
}();    // Expose globals.
    return _global;
}));