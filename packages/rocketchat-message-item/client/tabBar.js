Meteor.startup(function() {
	return Tracker.autorun(function() {
		if (RocketChat.settings.get('Message_AllowPinning')) {
			return RocketChat.TabBar.addButton({
				groups: ['channel', 'group', 'direct'],
				id: 'itenned-messages',
				i18nTitle: 'Itenned_Messages',
				icon: 'icon-pin',
				template: 'pinnedMessages',
				order: 10
			});
		} else {
			return RocketChat.TabBar.removeButton('itenned-messages');
		}
	});
});
