import { createRouter, createWebHashHistory } from 'vue-router'
import { isAdmin, isAuth } from './plugins/authentication'
import DashboardComponent from './layouts/dashboard/index.vue'
import DashboardWidget from './components/main/dashboard.vue'

/**
 * Khmer Letter
 */
import KhmerLetterComponent from './components/khmer/letters/index.vue'
import KhmerConsonantComponent from './components/khmer/letters/consonant.vue'
import KhmerVowelComponent from './components/khmer/letters/vowel.vue'
import KhmerPlayWithLetterComponent from './components/khmer/letters/playwithletters.vue'
/**
 * Khmer Letter End
 */
/**
 * English Letter
 */
import EnglishLetterComponent from './components/english/letters/phonics/index.vue'
import EnglishPhonicPhase1Component from './components/english/letters/phonics/phase1.vue'
import EnglishPhonicPhase2Component from './components/english/letters/phonics/phase2.vue'
import EnglishPhonicPhase3Component from './components/english/letters/phonics/phase3.vue'
import EnglishPhonicPhase4Component from './components/english/letters/phonics/phase4.vue'
import EnglishPhonicPhase5Component from './components/english/letters/phonics/phase5.vue'
import EnglishPhonicGameComponent from './components/english/letters/phonics/playwithletters.vue'
/**
 * Error
 */
import Page404 from './components/errors/404.vue'

let routes = [] 
if( !isAdmin() ){
    routes = [
    { 
        path: '', 
        redirect: to => {
            return '/home'
        }
    },
    { 
        path: '/', 
        redirect: to => {
            return '/home'
        }
    },
    /**
     * Dashboard
     */
    {
        name: "Dashboard" ,
        path: '/home',
        component: DashboardComponent,
        meta: {
            transition: 'slide-left' ,
            requiresAuth: true,
            is_admin : true
        },
        children: [{
            name: 'DashboardWidgets' ,
            path: '',
            component: DashboardWidget ,
            meta : {
                transition: 'slide-left' ,
                requiresAuth: true ,
                is_admin : true
            }
        },
        /**
         * Khmer consonants module
         */
        {
            name: 'KhmerLetter' ,
            path: '/kletters',
            component: KhmerLetterComponent ,
            meta: { 
                transition: 'slide-right' ,
                requiresAuth: false,
                is_admin : false
            },
            children: [
                {
                    name: "KhmerConsonant" ,
                    path: '' ,
                    component: KhmerConsonantComponent
                },
                {
                    name: "KhmerConsonant" ,
                    path: 'consonants' ,
                    component: KhmerConsonantComponent
                },
                {
                    name: "KhmerVowel" ,
                    path: 'vowels' ,
                    component: KhmerVowelComponent
                },
                {
                    name: "KhmerPlayWithLetters" ,
                    path: 'playwithletters' ,
                    component: KhmerPlayWithLetterComponent
                },
                
            ]
        },
        /**
         * English Module
         */
        {
            name: 'EnglishLetter' ,
            path: '/enletters',
            component: EnglishLetterComponent ,
            meta: { 
                transition: 'slide-right' ,
                requiresAuth: false,
                is_admin : false
            },
            children: [
                {
                    name: "EnglishPhonicsDefault" ,
                    path: '' ,
                    component: EnglishPhonicPhase1Component
                },
                {
                    name: "EnglishPhonics" ,
                    path: 'phonics' ,
                    component: EnglishPhonicPhase1Component ,
                    meta: {
                        transition: 'slide-right' ,
                        requiresAuth: false,
                        is_admin : false
                    },
                },
                {
                    name: "EnglishPhonicsPhase1" ,
                    path: 'phonics/phase1' ,
                    component: EnglishPhonicPhase1Component ,
                    meta: {
                        transition: 'slide-right' ,
                        requiresAuth: false,
                        is_admin : false
                    },
                },
                {
                    name: "EnglishPhonicsPhase2" ,
                    path: 'phonics/phase2' ,
                    component: EnglishPhonicPhase2Component ,
                    meta: {
                        transition: 'slide-right' ,
                        requiresAuth: false,
                        is_admin : false
                    },
                },
                {
                    name: "EnglishPhonicsPhase3" ,
                    path: 'phonics/phase3' ,
                    component: EnglishPhonicPhase3Component ,
                    meta: {
                        transition: 'slide-right' ,
                        requiresAuth: false,
                        is_admin : false
                    },
                },
                {
                    name: "EnglishPhonicsPhase4" ,
                    path: 'phonics/phase4' ,
                    component: EnglishPhonicPhase4Component ,
                    meta: {
                        transition: 'slide-right' ,
                        requiresAuth: false,
                        is_admin : false
                    },
                },
                {
                    name: "EnglishPhonicsPhase5" ,
                    path: 'phonics/phase5' ,
                    component: EnglishPhonicPhase5Component ,
                    meta: {
                        transition: 'slide-right' ,
                        requiresAuth: false,
                        is_admin : false
                    },
                },
                {
                    name: "EnglishPhonicsGame" ,
                    path: 'phonics/game' ,
                    component: EnglishPhonicGameComponent ,
                    meta: {
                        transition: 'slide-right' ,
                        requiresAuth: false,
                        is_admin : false
                    },
                },
                
            ]
        },
    ],
    }]
}else{
    routes = [{ 
        path: '', 
        redirect: to => {
            return '/home'
        }
    },
    { 
        path: '/', 
        redirect: to => {
            return '/home'
        }
    },
    /**
     * Dashboard
     */
    {
        name: "Dashboard" ,
        path: '/home',
        component: DashboardComponent,
        meta: {
            transition: 'slide-left' ,
            requiresAuth: true,
            is_admin : true
        },
        children: [{
            name: 'DashboardWidgets' ,
            path: '',
            component: DashboardWidget ,
            meta : {
                transition: 'slide-left' ,
                requiresAuth: true ,
                is_admin : true
            }
        }]
    }]
}

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

// Meta Handling
router.beforeEach((to, from, next) => {
    next()
})
// .beforeResolve(async to => {
//     if (to.meta.requiresCamera) {
//         try {
//         await askForCameraPermission()
//         } catch (error) {
//         if (error instanceof NotAllowedError) {
//             // ... handle the error and then cancel the navigation
//             return false
//         } else {
//             // unexpected error, cancel the navigation and pass the error to the global handler
//             throw error
//         }
//         }
//     }
// })

export default router