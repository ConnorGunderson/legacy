import { objectType, extendType } from 'nexus';

export const Order = objectType({
	name: 'Order',
	definition(t) {
		t.model.id();
		t.model.email();

		t.model.subtotal();
		t.model.tax();
		t.model.total();
		t.model.created();
		t.model.items();
	}
});

export const OrderQueries = extendType({
	type: 'Query',
	definition(t) {
		t.crud.order();
		t.crud.orders({
			filtering: true
		});
	}
});

export const OrderMutations = extendType({
	type: 'Mutation',
	definition(t) {
		t.crud.createOneOrder();
	}
});
