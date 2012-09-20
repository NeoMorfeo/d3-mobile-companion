/**
 * Created with JetBrains WebStorm.
 * User: stan229
 * Date: 9/19/12
 * Time: 3:44 PM
 * To change this template use File | Settings | File Templates.
 */
Ext.define('D3Mobile.view.hero.Skills', {
    extend : 'Ext.Container',
    xtype  : 'skills',
    config : {
        cls              : 'hero-detail-card',
        scrollable       : {
            direction     : 'vertical',
            directionLock : true
        },
        styleHtmlContent : true,
        tpl              : ''.concat(
            '<div class="hero-skills">',
                '<div class="skills">',
                    '<div class="actives">',
                        '<tpl for="skills.active">',
                            '<div class="skill" data-tooltipurl="{skill.tooltipUrl}" data-runetype="{rune.type}">',
                                '<tpl if="xindex == 1">',
                                    '<div class="number">L</div>',
                                '<tpl elseif="xindex == 2">',
                                    '<div class="number">R</div>',
                                '<tpl else>',
                                    '<div class="number">{[xindex-2]}</div>',
                                '</tpl>',
                                '<img alt="{skill.name}" src="http://us.media.blizzard.com/d3/icons/skills/64/{skill.icon}.png">',
                                '<div class="name">{skill.name}</div>',
                                '<div class="rune">{rune.name}</div>',
                            '</div>',
                        '</tpl>',
                    '</div>',
                    '<div class="passives">',
                        '<tpl for="skills.passive">',
                            '<div class="skill" data-tooltipurl="{skill.tooltipUrl}">',
                                '<img alt="{skill.name}" src="http://us.media.blizzard.com/d3/icons/skills/64/{skill.icon}.png">',
                                '<div class="name">{skill.name}</div>',
                            '</div>',
                        '</tpl>',
                    '</div>',
                '</div>',
            '</div>'
        )
    }
});