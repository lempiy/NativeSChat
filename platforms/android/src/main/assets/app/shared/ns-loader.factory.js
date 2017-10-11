"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var file_system_1 = require("file-system");
var SEPARATOR = "#";
var NsModuleFactoryLoader = (function () {
    function NsModuleFactoryLoader(compiler) {
        this.compiler = compiler;
    }
    NsModuleFactoryLoader.prototype.load = function (path) {
        var _a = this.splitPath(path), modulePath = _a.modulePath, exportName = _a.exportName;
        var loadedModule = require(modulePath)[exportName];
        if (!loadedModule) {
            throw new Error("Cannot find \"" + exportName + "\" in \"" + modulePath + "\"");
        }
        return this.compiler.compileModuleAsync(loadedModule);
    };
    NsModuleFactoryLoader.prototype.splitPath = function (path) {
        var _a = path.split(SEPARATOR), modulePath = _a[0], exportName = _a[1];
        modulePath = getAbsolutePath(modulePath);
        if (typeof exportName === "undefined") {
            exportName = "default";
        }
        return { modulePath: modulePath, exportName: exportName };
    };
    return NsModuleFactoryLoader;
}());
NsModuleFactoryLoader = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Compiler])
], NsModuleFactoryLoader);
exports.NsModuleFactoryLoader = NsModuleFactoryLoader;
function getAbsolutePath(relativePath) {
    return file_system_1.path.normalize(file_system_1.path.join(file_system_1.knownFolders.currentApp().path, relativePath));
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnMtbG9hZGVyLmZhY3RvcnkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJucy1sb2FkZXIuZmFjdG9yeS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUt1QjtBQUV2QiwyQ0FBaUQ7QUFFakQsSUFBTSxTQUFTLEdBQUcsR0FBRyxDQUFDO0FBR3RCLElBQWEscUJBQXFCO0lBRTlCLCtCQUFvQixRQUFrQjtRQUFsQixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQ3RDLENBQUM7SUFFRCxvQ0FBSSxHQUFKLFVBQUssSUFBWTtRQUNULElBQUEseUJBQStDLEVBQTlDLDBCQUFVLEVBQUUsMEJBQVUsQ0FBeUI7UUFFcEQsSUFBSSxZQUFZLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25ELEVBQUUsQ0FBQyxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQztZQUNoQixNQUFNLElBQUksS0FBSyxDQUFDLG1CQUFnQixVQUFVLGdCQUFTLFVBQVUsT0FBRyxDQUFDLENBQUM7UUFDdEUsQ0FBQztRQUVELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLGtCQUFrQixDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzFELENBQUM7SUFFTyx5Q0FBUyxHQUFqQixVQUFrQixJQUFZO1FBQ3RCLElBQUEsMEJBQWdELEVBQS9DLGtCQUFVLEVBQUUsa0JBQVUsQ0FBMEI7UUFDckQsVUFBVSxHQUFHLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUV6QyxFQUFFLENBQUMsQ0FBQyxPQUFPLFVBQVUsS0FBSyxXQUFXLENBQUMsQ0FBQyxDQUFDO1lBQ3BDLFVBQVUsR0FBRyxTQUFTLENBQUM7UUFDM0IsQ0FBQztRQUVELE1BQU0sQ0FBQyxFQUFDLFVBQVUsWUFBQSxFQUFFLFVBQVUsWUFBQSxFQUFDLENBQUM7SUFDcEMsQ0FBQztJQUNMLDRCQUFDO0FBQUQsQ0FBQyxBQTFCRCxJQTBCQztBQTFCWSxxQkFBcUI7SUFEakMsaUJBQVUsRUFBRTtxQ0FHcUIsZUFBUTtHQUY3QixxQkFBcUIsQ0EwQmpDO0FBMUJZLHNEQUFxQjtBQTRCbEMseUJBQXlCLFlBQW9CO0lBQ3pDLE1BQU0sQ0FBQyxrQkFBSSxDQUFDLFNBQVMsQ0FBQyxrQkFBSSxDQUFDLElBQUksQ0FBQywwQkFBWSxDQUFDLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDO0FBQ25GLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEluamVjdGFibGUsXG4gICAgQ29tcGlsZXIsXG4gICAgTmdNb2R1bGVGYWN0b3J5LFxuICAgIE5nTW9kdWxlRmFjdG9yeUxvYWRlclxufSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBwYXRoLCBrbm93bkZvbGRlcnMgfSBmcm9tIFwiZmlsZS1zeXN0ZW1cIjtcblxuY29uc3QgU0VQQVJBVE9SID0gXCIjXCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOc01vZHVsZUZhY3RvcnlMb2FkZXIgaW1wbGVtZW50cyBOZ01vZHVsZUZhY3RvcnlMb2FkZXIge1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBjb21waWxlcjogQ29tcGlsZXIpIHtcbiAgICB9XG5cbiAgICBsb2FkKHBhdGg6IHN0cmluZyk6IFByb21pc2U8TmdNb2R1bGVGYWN0b3J5PGFueT4+IHtcbiAgICAgICAgbGV0IHttb2R1bGVQYXRoLCBleHBvcnROYW1lfSA9IHRoaXMuc3BsaXRQYXRoKHBhdGgpO1xuXG4gICAgICAgIGxldCBsb2FkZWRNb2R1bGUgPSByZXF1aXJlKG1vZHVsZVBhdGgpW2V4cG9ydE5hbWVdO1xuICAgICAgICBpZiAoIWxvYWRlZE1vZHVsZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW5ub3QgZmluZCBcIiR7ZXhwb3J0TmFtZX1cIiBpbiBcIiR7bW9kdWxlUGF0aH1cImApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuY29tcGlsZXIuY29tcGlsZU1vZHVsZUFzeW5jKGxvYWRlZE1vZHVsZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzcGxpdFBhdGgocGF0aDogc3RyaW5nKToge21vZHVsZVBhdGg6IHN0cmluZywgZXhwb3J0TmFtZTogc3RyaW5nfSB7XG4gICAgICAgIGxldCBbbW9kdWxlUGF0aCwgZXhwb3J0TmFtZV0gPSBwYXRoLnNwbGl0KFNFUEFSQVRPUik7XG4gICAgICAgIG1vZHVsZVBhdGggPSBnZXRBYnNvbHV0ZVBhdGgobW9kdWxlUGF0aCk7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBleHBvcnROYW1lID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgICBleHBvcnROYW1lID0gXCJkZWZhdWx0XCI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4ge21vZHVsZVBhdGgsIGV4cG9ydE5hbWV9O1xuICAgIH1cbn1cblxuZnVuY3Rpb24gZ2V0QWJzb2x1dGVQYXRoKHJlbGF0aXZlUGF0aDogc3RyaW5nKSB7XG4gICAgcmV0dXJuIHBhdGgubm9ybWFsaXplKHBhdGguam9pbihrbm93bkZvbGRlcnMuY3VycmVudEFwcCgpLnBhdGgsIHJlbGF0aXZlUGF0aCkpO1xufSJdfQ==