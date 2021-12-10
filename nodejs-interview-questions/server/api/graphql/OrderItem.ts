import { objectType } from 'nexus';

export const OrderItem = objectType({
	name: 'OrderItem',
	definition(t) {
		t.model.id();
		t.model.price();
		t.model.product();
		t.model.order();
	}
});
