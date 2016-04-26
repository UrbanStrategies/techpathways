window.activities = {
	'hardware' : ['network.development', 'hardware.engineering'],
	'software' : ['coding.programming', 'web.development', 'software.engineering'],
	'product development' : ['product.management', 'data.science', 'user.experience.design'],
	'visual design' : ['graphic.multimedia.design', 'animation.3d']
};

window.price_range_values = [2, [
    {label: 'Free', normalized_list: ["Free"]},
    {label: '$', normalized_list: ['$', '$ - $$', '$$', '$$ - $$$', '$$$$']},
    {label: 'Show All', normalized_list: ['Free', '$', '$ - $$', '$$', '$$ - $$$', '$$$$', '$$$$$']}
]];

window.dd_choices =[{
    'id': 0,
    'dropdown_type' : 'learner taxonomy',
    'label': "I'm",
    'options': ['a kid (under 12)', ['a kid (under 12)', 'a teen (upto 17)', 'an adult (18+)']]
}, {
    'id': 1,
    'dropdown_type' : 'skill taxonomy',
    'label': "I want to learn",
    'options': ['software', ['software', 'hardware', 'product development', 'visual design']]
}];

