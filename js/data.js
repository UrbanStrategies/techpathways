window.activities = {
	'hardware' : ['network.development', 'hardware.engineering'],
	'software' : ['coding.programming', 'web.development', 'software.engineering'],
	'product development' : ['product.management', 'data.science', 'user.experience.design'],
	'visual design' : ['graphic.multimedia.design', 'animation.3d']
};

window.filter_values = {'price':
			[2, [
			    {label: 'Free', normalized_list: ["Free"]},
			    {label: '$', normalized_list: ['$', '$ - $$', '$$', '$$ - $$$', '$$$$']},
			    {label: 'Show All', normalized_list: ['Free', '$', '$ - $$', '$$', '$$ - $$$', '$$$$', '$$$$$']}
			]],
			'skill_level' :
			[0, [
			    {label: 'Basic', normalized_list: ["Basic"]},
			    {label: 'Intermediate', normalized_list: ['Intermediate']},
			    {label: 'Advanced', normalized_list: ['Advanced']}
			]]
		       };

window.dd_choices =[{
    'id': 0,
    'dropdown_type' : 'learner taxonomy',
    'label': "I'm",
    'options': ['a teen (upto 17)', ['a kid (under 12)', 'a teen (upto 17)', 'an adult (18+)']]
}, {
    'id': 1,
    'dropdown_type' : 'skill taxonomy',
    'label': "I want to learn",
    'options': ['software', ['software', 'hardware', 'product development', 'visual design']]
}];


window.profile = {};

g1_title = 'Software';
g2_title = 'Hardware';
g3_title = 'Product Development';
g4_title = 'Visual Design';

g1_title = 'Engineering';
g2_title = 'Operations';
g3_title = 'Product/Mktg';
g4_title = 'Admin/Support';

window.profile.profile_groups = [g1_title, [g1_title, g2_title, g3_title, g4_title]];

window.profile.job_profiles = [
    {category: g3_title, key: 'product_manager'},
    {category: g3_title, key: 'user_experience_designers'},
    {category: g3_title, key: 'tech_product_sales_managers'},
    {category: g3_title, key: 'online_community_builders'},
    {category: g4_title, key: 'content_moderators'},
    {category: g4_title, key: 'administrative_assistants'},
    {category: g1_title, key: "coders/programmers"},
    {category: g1_title, key: "software_engineer"},
    {category: g1_title, key: 'web_developer'},
    {category: g1_title, key: 'data_scientists'},
    {category: g2_title, key: 'database_administrators'},
    {category: g2_title, key: 'privacy/_information_security_operators'},
    {category: g4_title, key: 'data_entry_clerks'},
    {category: g1_title, key: 'hardware_engineer'},
    {category: g4_title, key: 'switchboard_operators'},
    {category: g2_title, key: 'network_developers'},
    {category: g4_title, key: 'it_support_/_help_desk_specialists'},
    {category: g2_title, key: 'tele-communications_technicians'},
    {category: g2_title, key: 'network_and_computer_system_administrators'},
    {category: g3_title, key: 'graphic_&_multi-media_designers_(including_3d_animators)'},
    {category: g3_title, key: 'digital/web_marketers'},
];
