// Components
import { LoadFiles } from "@/features/working-files/load-files/ui";
import { CreateFolders } from "@/features/working-files/create-folders/ui/create-folders";

// Styles
import "./options-working-files.scss";

export function OptionsWorkingFiles() {
  return (
    <div className="options-working-files">
      <LoadFiles />
      <CreateFolders />
    </div>
  );
};