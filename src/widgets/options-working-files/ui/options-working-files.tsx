// Components
import { CreateFiles } from "@/features/create-files/ui/create-files";
import { LoadFiles } from "@/features/load-files/ui/load-files";
import { CreateFolders } from "@/features/create-folders/ui/create-folders";

// Styles
import "./options-working-files.scss";

export function OptionsWorkingFiles() {
  return (
    <div className="options-working-files">
      <CreateFiles />
      <LoadFiles />
      <CreateFolders />
    </div>
  );
};