import Vue from "vue";
import Vuex from "vuex";
import { createModule, createProxy, extractVuexModule, Module } from "vuex-class-component";

Vue.use(Vuex);

const VuexModule = createModule({
	strict: false,
	target: "nuxt",
	namespaced: "MainStore",
});

@Module()
export class MainStore extends VuexModule {
	// Submodules
	// subStore = createSubModule(SubStore);
	// State
	// foo = bar;
	// Getters
	// get fooLength() {
	// 	return this.foo.length;
	// }
	// Mutations
	// @mutation setFoo(foo: any) {
	// 	this.foo = foo;
	// }
	// Actions
	// @action async nuxtServerInit(_nuxtContext: Context) { }
}

// store.vuex.ts
export const store = new Vuex.Store({
	modules: {
		...extractVuexModule(MainStore),
	},
});

// Creating proxies.
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const vxm = {
	main: createProxy(store, MainStore),
};
