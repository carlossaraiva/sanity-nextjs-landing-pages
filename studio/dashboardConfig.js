export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62098f44277c5ad352a461d6',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-gua7mtfw',
                  apiId: '7658e193-ca3c-4237-8f87-735aef81965e'
                },
                {
                  buildHookId: '62098f4400f584e08383133d',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-w7qzmcy5',
                  apiId: '452e986b-f9fa-4999-9ec2-a2bcf4567903'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/carlossaraiva/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-w7qzmcy5.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
