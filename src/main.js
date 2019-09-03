import Vue from 'vue'
import App from './App.vue'

// import main css file
import "./sass/main.scss";

import HeadingSecondary from './components/HeadingSecondary.vue';
import HeadingTertiary from './components/HeadingTertiary.vue';
import Composition from './components/Composition.vue';
import FeatureBox from './components/FeatureBox.vue';
import Card from './components/Card.vue';

Vue.component('heading-secondary', HeadingSecondary);
Vue.component('heading-tertiary', HeadingTertiary);
Vue.component('composition', Composition);
Vue.component('feature-box', FeatureBox);
Vue.component('card', Card);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')