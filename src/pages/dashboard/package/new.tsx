import PackageForm from "@/components/package/package-form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CreatePackagePage = () => {
  return (
    <div className="container py-8 mx-auto">
      <Card>
        <CardHeader>
          <CardTitle>
            <CardTitle>Create New Umroh Package</CardTitle>
            <CardDescription>
              Fill out the form to create a new travel package
            </CardDescription>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <PackageForm />
        </CardContent>
      </Card>
    </div>
  );
};

export default CreatePackagePage;
