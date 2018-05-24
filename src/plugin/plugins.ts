import * as markdowIt from 'markdown-it';
import { MarkdownItTOC } from './markdownItTOC';
import { MarkdownItContainer } from './markdownItContainer';
import { MarkdownItAnchorLink } from './markdownItAnchorLink';
import { MarkdownItExportHelper } from './markdownItExportHelper';

interface markdowItPlugin {
    plugin: Function,
    params?: any[],
}

export var plugins: markdowItPlugin[] = [
    { plugin: MarkdownItTOC },
    { plugin: MarkdownItAnchorLink }, // MarkdownItAnchorLink requires MarkdownItTOC
    { plugin: MarkdownItContainer },
    { plugin: require('markdown-it-footnote') },
    { plugin: require('markdown-it-abbr') },
    { plugin: require('markdown-it-sup') },
    { plugin: require('markdown-it-sub') },
    { plugin: require('markdown-it-checkbox') },
    { plugin: require('markdown-it-attrs') },
    { plugin: require('markdown-it-kbd') },
    { plugin: require('markdown-it-underline') },
    { plugin: require('markdown-it-deflist') },
    { plugin: MarkdownItExportHelper }
]