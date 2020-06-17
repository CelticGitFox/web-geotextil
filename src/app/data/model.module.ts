import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {EncryptService} from './services/encrypt.service';
import {OptionService} from './services/option.service';
import {UserService} from './services/user.service';
import {GroupService} from './services/group.service';
import {RolService} from './services/rol.service';
import {RolModel} from './model/rol.model';
import {OptionModel} from './model/option.model';
import {FileService} from "./services/file.service";
import {FileTypeData} from "./static/fileType.data";
import {FileMultipleModel} from "./model/fileMultiple.model";
import {CatalogueData} from "./static/Catalogue.data";
import {CatalogueService} from "./services/catalogue.service";

@NgModule({
  imports: [
    HttpClientModule
  ],
  providers: [
    EncryptService,
    RolModel,
    OptionModel,
    OptionService,
    UserService,
    GroupService,
    RolService,
    FileService,
    FileTypeData,
    FileMultipleModel,
    CatalogueData,
    CatalogueService,
  ]
})
export class ModelModule {
}
