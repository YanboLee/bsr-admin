import { RouteConfig } from 'vue-router'
import Layout from '@/layout/index.vue'

const componentsRouter: RouteConfig = {
  path: '/components',
  component: Layout,
  redirect: 'noRedirect',
  name: 'ComponentDemo',
  meta: {
    title: 'components',
    icon: 'component'
  },
  children: [
    // {
    //   path: 'tinymce',
    //   component: () => import(/* webpackChunkName: "tinymce" */ '@/views_/components-demo/tinymce.vue'),
    //   name: 'TinymceDemo',
    //   meta: { title: 'tinymce' }
    // },
    // {
    //   path: 'markdown',
    //   component: () => import(/* webpackChunkName: "markdown" */ '@/views_/components-demo/markdown.vue'),
    //   name: 'MarkdownDemo',
    //   meta: { title: 'markdown' }
    // },
    // {
    //   path: 'json-editor',
    //   component: () => import(/* webpackChunkName: "json-editor" */ '@/views_/components-demo/json-editor.vue'),
    //   name: 'JsonEditorDemo',
    //   meta: { title: 'jsonEditor' }
    // },
    // {
    //   path: 'split-pane',
    //   component: () => import(/* webpackChunkName: "split-pane" */ '@/views_/components-demo/split-pane.vue'),
    //   name: 'SplitPaneDemo',
    //   meta: { title: 'splitPane' }
    // },
    // {
    //   path: 'avatar-upload',
    //   component: () => import(/* webpackChunkName: "avatar-upload" */ '@/views_/components-demo/avatar-upload.vue'),
    //   name: 'AvatarUploadDemo',
    //   meta: { title: 'avatarUpload' }
    // },
    // {
    //   path: 'dropzone',
    //   component: () => import(/* webpackChunkName: "dropzone" */ '@/views_/components-demo/dropzone.vue'),
    //   name: 'DropzoneDemo',
    //   meta: { title: 'dropzone' }
    // },
    // {
    //   path: 'sticky',
    //   component: () => import(/* webpackChunkName: "sticky" */ '@/views_/components-demo/sticky.vue'),
    //   name: 'StickyDemo',
    //   meta: { title: 'sticky' }
    // },
    // {
    //   path: 'count-to',
    //   component: () => import(/* webpackChunkName: "count-to" */ '@/views_/components-demo/count-to.vue'),
    //   name: 'CountToDemo',
    //   meta: { title: 'countTo' }
    // },
    // {
    //   path: 'mixin',
    //   component: () => import(/* webpackChunkName: "component-mixin" */ '@/views_/components-demo/mixin.vue'),
    //   name: 'ComponentMixinDemo',
    //   meta: { title: 'componentMixin' }
    // },
    // {
    //   path: 'back-to-top',
    //   component: () => import(/* webpackChunkName: "back-to-top" */ '@/views_/components-demo/back-to-top.vue'),
    //   name: 'BackToTopDemo',
    //   meta: { title: 'backToTop' }
    // },
    // {
    //   path: 'draggable-dialog',
    //   component: () => import(/* webpackChunkName: "draggable-dialog" */ '@/views_/components-demo/draggable-dialog.vue'),
    //   name: 'DraggableDialogDemo',
    //   meta: { title: 'draggableDialog' }
    // },
    // {
    //   path: 'draggable-kanban',
    //   component: () => import(/* webpackChunkName: "draggable-kanban" */ '@/views_/components-demo/draggable-kanban.vue'),
    //   name: 'DraggableKanbanDemo',
    //   meta: { title: 'draggableKanban' }
    // },
    // {
    //   path: 'draggable-list',
    //   component: () => import(/* webpackChunkName: "draggable-list" */ '@/views_/components-demo/draggable-list.vue'),
    //   name: 'DraggableListDemo',
    //   meta: { title: 'draggableList' }
    // },
    // {
    //   path: 'draggable-select',
    //   component: () => import(/* webpackChunkName: "draggable-select" */ '@/views_/components-demo/draggable-select.vue'),
    //   name: 'DraggableSelectDemo',
    //   meta: { title: 'draggableSelect' }
    // }
  ]
}

export default componentsRouter
