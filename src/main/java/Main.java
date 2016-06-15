import java.io.File;

public class Main {
    public static void main(String[] args) {
        File directory = new File("images");
        System.out.println(directory.getAbsolutePath());
        File[] files = directory.listFiles();
        for (int i = 0; i <files.length; i++) {
            System.out.println(files[i].getName());
        }
    }
}
