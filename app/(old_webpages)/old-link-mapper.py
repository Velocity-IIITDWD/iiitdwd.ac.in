import os

def create_page_file(directory, new_link):
    """Create page.tsx file in the given directory if it doesn't exist."""
    page_file_path = os.path.join(directory, 'page.tsx')
    if not os.path.exists(page_file_path):
        with open(page_file_path, 'w') as f:
            f.write('''import {{ redirect }} from 'next/navigation';

export default function Page() {{
  redirect('{new_link}');
}}'''.format(new_link = new_link))
        print("{} is created".format(new_link))
    else:
        print("{} already exists".format(new_link))

def create_directories_with_redirects(root_dir, link_mapping):
    """Create directories with old link names and add a Next.js redirect code in page.tsx."""
    for i in link_mapping:
        new_directory_path = os.path.join(root_dir, i)
        if not os.path.exists(new_directory_path):
            os.mkdir(new_directory_path)
            print('Created {} directory -- '.format(i), end="")
        create_page_file(new_directory_path, link_mapping[i])

if __name__ == "__main__":
    # Example: { "Icc.php": "/icc", "Careers.php": "/careers" } --- they're case sensitive
    link_mapping = {
        
    }

    root_directory = r'D:\Git things\delete-me\iiitdwd.ac.in\app\(old_webpages)'
    if not os.path.exists(root_directory):
        print("Directory doesn't exist.")
    else:
        create_directories_with_redirects(root_directory, link_mapping)
        print("Directories with redirect pages created successfully.")
