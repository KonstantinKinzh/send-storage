// Components
import { OptionsWorkingFiles } from "@/widgets/options-working-files/ui/options-working-files";
import { Title } from "@/shared/ui/title";
import { Arrange } from "@/features/arrange/ui";
import { ArrangePanel } from "@/widgets/arrange-panel";

// Styles
import "./all-files.scss";

export function AllFiles() {
    return (
        <div className="all-files">
            <OptionsWorkingFiles />

            <div className="all-files__title">
                <Title
                    title="Все файлы"
                />
                <Arrange />
            </div>

            <ArrangePanel />
        </div>
    );
};