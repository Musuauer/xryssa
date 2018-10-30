import CMS from 'netlify-cms'

import InfoPagePreview from './preview-templates/InfoPagePreview'
import ProjectPagePreview from './preview-templates/ProjectPagePreview'
import ContactPagePreview from './preview-templates/ContactPagePreview'

CMS.registerPreviewTemplate('info', InfoPagePreview)
CMS.registerPreviewTemplate('contact', ContactPagePreview)
CMS.registerPreviewTemplate('project', ProjectPagePreview)
