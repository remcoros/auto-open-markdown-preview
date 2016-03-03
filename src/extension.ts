'use strict';

import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
    vscode.workspace.onDidOpenTextDocument(e => {
        vscode.commands.executeCommand("workbench.action.markdown.openPreviewSideBySide");
    }, undefined, context.subscriptions);
}

export function deactivate() {
}