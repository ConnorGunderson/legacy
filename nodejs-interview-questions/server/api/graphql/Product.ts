import { objectType, extendType } from 'nexus';

export const Product = objectType({
	name: 'Product',
	definition(t) {
		t.model.id();
		t.model.name();
		t.model.price();
		t.model.image();
	}
});

export const ProductQuerys = extendType({
	type: 'Query',
	definition(t) {
		t.crud.product();
		t.crud.products({
			filtering: true
		});
	}
});

export const ProductMutations = extendType({
	type: 'Mutation',
	definition(t) {
		t.crud.createOneProduct();
		t.crud.deleteOneProduct();
	}
});
