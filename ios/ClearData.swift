import Foundation
@objc(ClearData)
class ClearData: NSObject {

    @objc
    func clearAppData() -> Void {
        if let appDomain = Bundle.main.bundleIdentifier {
            UserDefaults.standard.removePersistentDomain(forName: appDomain)
        }
        NSLog("Print")
    }
}
