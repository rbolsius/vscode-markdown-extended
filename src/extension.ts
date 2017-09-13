'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { CommandExportCurrent } from './commands/exportCurrent';
import * as markdowIt from 'markdown-it';
import { plugins } from './plugin/plugins';
import { CommandCopy, CommandCopyWithStyles } from './commands/copy';

export var markdown: markdowIt.MarkdownIt;
export var context: vscode.ExtensionContext;
// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(ctx: vscode.ExtensionContext) {
    context = ctx;
    ctx.subscriptions.push(new CommandExportCurrent());
    ctx.subscriptions.push(new CommandCopy());
    ctx.subscriptions.push(new CommandCopyWithStyles());
    return {
        extendMarkdownIt(md: markdowIt.MarkdownIt) {
            plugins.map(p => {
                if (p) md.use(p);
            });
            markdown = md;
            return md;
        }
    }
}

// this method is called when your extension is deactivated
export function deactivate() {
}