Flame.TableHeader = Ember.Object.extend({
    isClickable: true,

    headerLabel: Ember.computed.alias('label'),
    isLeaf: Ember.computed.not('children'),

    createCell: function(data) {
        throw new Error('Not implemented');
    }
});
