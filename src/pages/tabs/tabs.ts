import { Component } from '@angular/core';
import { BookListPage } from '../bookList/bookList';
import { CdListPage } from '../cdList/cdList';

@Component({
    selector: 'page-tabs',
    templateUrl: 'tabs.html'
})
export class TabsPage {
    bookListPage = BookListPage;
    cdListPage = CdListPage;
}