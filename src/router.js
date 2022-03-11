/* Define router */
import { createRouter, createWebHistory } from 'vue-router'

/* Page views */
import LandingPage from './components/Pages/LandingPage'
import DetailPage from './components/Pages/DetailPage'

/* Init routes */
export function setupRouter() {
    const routes = [
        {
            path: '/',
            name: 'landing',
            component: LandingPage,
            meta: {
                reuse: true
            }
        },
        {
            path: '/movie-details/:slug',
            props: true,
            name: 'detail',
            component: DetailPage,
            meta: {
                reuse: false
            }

        }
    ]

    const router = createRouter({
        history: createWebHistory(),
        routes,
        scrollBehavior() {
            return { top: 0 }
        }
    })    

    router.beforeEach((to, from, next) => {
        const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)
        const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
        // const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
    
        if(nearestWithTitle) document.title = nearestWithTitle.meta.title
    
        Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))
    
        if(!nearestWithMeta) return next()
    
        nearestWithMeta.meta.metaTags.map(tagDef => {
            const tag = document.createElement('meta')
        
            Object.keys(tagDef).forEach(key => {
                tag.setAttribute(key, tagDef[key])
            })
        
            tag.setAttribute('data-vue-router-controlled', '')
        
            return tag
        })
    
        .forEach(tag => document.head.appendChild(tag))
    
        next()
    })

    return router
}