# vue
Vue.JS

# Vue Architecture/Overview
```
main.js {
    imports App.vue {
        template

        components {
            // Every component has 3 things: template, script, style

            template {
                v-model
                v-if v-else
                v-for
                v-show
                @eventName // event fired when child component emits it
                @click='$emit("childEventName", valueToSendToParent)'
                slot // You can pass a body to a component that will be rendered inside <slot></slot>
            }

            script {
                props // Pass data to child components
                data
                methods
                components // imported 'child' components

                // COMPONENTS CAN IMPORT MIXINS
                // Mixins are a flexible way to distribute reusable functionalities for Vue components
                // You can also apply a mixin globally. Use with caution!
                mixins {
                    data
                    methods
                    components
                }

                // Plugins
                // Plugins usually add global-level functionality to Vue.

                // Filters
                // Vue.js allows you to define filters that can be used to apply common text formatting

                // VUEX
                // Vuex is a state management pattern + library for Vue.js applications.
                vuex {
                    state       // the data
                    getters     // return the data
                    mutations   // set the data
                    actions     // call mutations to set the data calling store.commit('mutationName', payload)

                    modules {
                        state       // the data
                        getters     // return the data
                        mutations   // set the data
                        actions
                    }
                }
            }

            style
        }
    }
}
```

# Vuex Overview

![Vuex Image](https://vuex.vuejs.org/vuex.png)

